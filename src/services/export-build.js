const exportBuild = (hero, powers, items) => {
    const heroId = hero.id;
    const perkIds = [...powers.map(power => power.id), ...items.map(item => item.id)];
    const buildId = `${heroId}-${perkIds.join('-')}`;
    return btoa(buildId);
}

export default exportBuild;