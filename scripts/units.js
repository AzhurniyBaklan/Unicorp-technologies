const surge = extendContent(UnitType, "surge", {});
surge.constructor = () => extend(UnitEntity, {});
let blue = Color.valueOf("#e5e5ff");

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
enforcer.abilities.add(new ForceFieldAbility(70, 7, 220, 600));

const sickle = extendContent(UnitType, "sickle", {});
sickle.constructor = () => extend(UnitEntity, {});
sickle.abilities.add(new MoveLightningAbility(25, 10, 0.2, 0.5, 1, 1, blue ));

const razor = extendContent(UnitType, "razor", {});
razor.constructor = () => extend(UnitEntity, {});
razor.abilities.add(new  RepairFieldAbility(50, 50, 50));

const aegis = extendContent(UnitType, "aegis", {});
aegis.constructor = () => extend(UnitEntity, {});
aegis.abilities.add(new ForceFieldAbility(70, 6, 300, 300), new ShieldRegenFieldAbility(10, 300, 300, 300));