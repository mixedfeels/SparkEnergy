module.exports = (Sequelize, DataTypes) => {
  const Posts = Sequelize.define("Posts", {
    // Here are the database tables
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Posts.associate = (models) => {
    // Cria um vinculo com a tabela Comments.
    Posts.hasMany(models.Comments, {
      // Se o Post for deletado todos os comments tbm irão.
      onDelete: "Cascade",
    });

    Posts.hasMany(models.Likes, {
      onDelete: "Cascade",
    });
  };

  return Posts;
};
