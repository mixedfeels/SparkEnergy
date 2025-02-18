module.exports = (Sequelize, DataTypes) => {
  const Addresses = Sequelize.define("Addresses", {
    // Here are the database tables
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Addresses.associate = (models) => {
    Addresses.belongsTo(models.Users, {
      foreignKey: "userId",
      onDelete: "Cascade",
    });
  };

  return Addresses;
};
