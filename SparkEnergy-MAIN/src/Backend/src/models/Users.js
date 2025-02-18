module.exports = (Sequelize, DataTypes) => {
  const Users = Sequelize.define("Users", {
    // Here are the database tables
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Likes, {
      onDelete: "Cascade",
    });

    Users.hasMany(models.Posts, {
      onDelete: "Cascade",
    });

    Users.hasOne(models.Addresses, {
      foreignKey: "userId",
      onDelete: "Cascade",
    });
  };

  return Users;
};
