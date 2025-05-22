import basicItems from "./basicItems.json";
import heroes from "./heroes.json";
import attributeTypes from "./attributeTypes.json";
import i18n from "../i18n";
import { Hero } from "../models/hero";
import { Items } from "../models/items";
import { Item } from "../models/item";
import { Power } from "../models/power";
import Skills from "../models/skills";
import Skill from "../models/skill";

/**
 * Return tue localized attributes
 * @returns An array of attribute type
 */
const getLocalizedAttributeTypes = () => {
  const t = i18n.getFixedT(null, "attributes"); // accès direct sans hook

  return Object.fromEntries(
    Object.entries(attributeTypes).map(([key, data]) => [
      key,
      {
        ...data,
        name: t(key),
      },
    ])
  );
};

/**
 * Return the localized heroes.
 * @returns An array of Hero.
 */
const getLocalizedHeroes = (): Hero[] => {
  const h = i18n.getFixedT(null, "heroes");
  const p = i18n.getFixedT(null, "powers");
  const i = i18n.getFixedT(null, "items");
  const d = i18n.getFixedT(null, "itemDescriptions");
  const s = i18n.getFixedT(null, "skills");

  const order = h("order", { returnObjects: true }) as number[];

  // Based on "order" => get the list of hero.
  return (
    order
      .map<Hero | undefined>((id) => {
        // Get hero data from JSON
        const heroData = heroes.find((h) => h.id === id);

        // Should always be true
        if (heroData) {
          // Get powers from translation file
          const powers = heroData.powers.map(
            (powerId) =>
              ({
                id: powerId,
                ...p(powerId, { returnObjects: true }),
              } as Power)
          );

          // Get items from translation file
          const items: Items = {
            common: [],
            rare: [],
            epic: [],
          };

          Object.entries(heroData.items).forEach(([itemType, heroItems]) => {
            const itemKey = itemType as keyof Items;
            items[itemKey].push(
              ...heroItems.map((item) => {
                const copyItem = {
                  ...item,
                  attributes: [...item.attributes],
                };
                const translatedProperties = i(copyItem.id, {
                  returnObjects: true,
                }) as { position: number; name: string };
                const translatedDescriptions = d(copyItem.id, {
                  returnObjects: true,
                });

                if (
                  Array.isArray(translatedDescriptions) &&
                  translatedDescriptions.length > 0
                ) {
                  const setDescriptions = new Set(translatedDescriptions);
                  copyItem.attributes.push(...setDescriptions);
                }

                return {
                  ...copyItem,
                  ...translatedProperties,
                } as Item;
              })
            );
          });

          // order items
          Object.entries(items).forEach(([, items]) =>
            items.sort(
              (a, b) => (a.position ?? Infinity) - (b.position ?? Infinity)
            )
          );

          // Get skills from translation file
          const skills = {
            weapons: [],
            abilities: [],
            passives: [],
            ultimates: [],
          } as Skills;

          Object.entries(heroData.skills).forEach(([skillType, skillIds]) => {
            const skillKey = skillType as keyof Skills;
            skills[skillKey].push(
              ...skillIds.map((skillId) => {
                const skill = s(skillId, { returnObjects: true });
                return {
                  id: skillId,
                  ...skill,
                } as Skill;
              })
            );
          });

          // Return Hero object.
          return {
            ...heroData,
            powers: powers.sort(
              (a, b) => (a.position ?? Infinity) - (b.position ?? Infinity)
            ),
            items: items,
            skills: skills,
            id: id,
            name: h(`names.${id}`),
          } as Hero;
        } else {
          // Add warning if mismatch between order & heroes.
          console.warn("Undefined hero detected for id: ", id);
        }
      })
      // Filter out potentially "undefined" results (shouldn't happen)
      .filter((h) => {
        return !!h;
      })
  );
};

/**
 * Cross data from translations and base input to create full items
 * @param rawItems the items coming from the datasource
 * @returns An array of Item
 */
const rebuildLocalizedItems = (rawItems: Array<any>): Item[] => {
  const i = i18n.getFixedT(null, "items");
  const d = i18n.getFixedT(null, "itemDescriptions");

  return rawItems.map((rawItem) => {
    const copyItem = { ...rawItem, attributes: [...rawItem.attributes] };
    const translatedProperties = i(copyItem.id, {
      returnObjects: true,
    }) as { position: number; name: string };
    const translatedDescriptions = d(copyItem.id, {
      returnObjects: true,
    });

    if (
      Array.isArray(translatedDescriptions) &&
      translatedDescriptions.length > 0
    ) {
      copyItem.attributes.push(...translatedDescriptions);
    }

    const item = {
      ...copyItem,
      ...translatedProperties,
    } as Item;

    return item;
  });
};

/**
 * Return the localized Items
 * @returns An Items object
 */
const getLocalizedItems = (): Items => {
  return {
    common: rebuildLocalizedItems(basicItems.common),
    rare: rebuildLocalizedItems(basicItems.rare),
    epic: rebuildLocalizedItems(basicItems.epic),
  };
};

export { getLocalizedItems, getLocalizedHeroes, getLocalizedAttributeTypes };
