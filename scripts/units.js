const surge = extendContent(UnitType, "surge", {});
surge.constructor = () => extend(UnitEntity, {});

const embarassment = extendContent(UnitType, "embarassment", {});
embarassment.constructor = () => extend(UnitEntity, {});
embarassment.defaultController = () => extend(MinerAI, {});

const backwater = extendContent(UnitType, "backwater", {});
backwater.constructor = () => extend(UnitEntity, {});
backwater.defaultController = () => extend(MinerAI, {});

const scarab = extendContent(UnitType, "scarab", {});
scarab.constructor = () => extend(UnitEntity, {});
scarab.defaultController = () => extend(MinerAI, {});

const enforcer = extendContent(UnitType, "enforcer", {});
enforcer.constructor = () => extend(UnitEntity, {});
enforcer.defaultController = () => extend(BuilderAI, {});
enforcer.abilities.add(new UnitSpawnAbility(surge, 500, 0, -5));

const razor = extendContent(UnitType, "razor", {});
razor.constructor = () => extend(UnitEntity, {});
razor.abilities.add(new ForceFieldAbility(70, 7, 220, 600));

const aegis = extendContent(UnitType, "aegis", {});
aegis.constructor = () => extend(UnitEntity, {});
aegis.abilities.add(new ForceFieldAbility(50, 6, 300, 500));
