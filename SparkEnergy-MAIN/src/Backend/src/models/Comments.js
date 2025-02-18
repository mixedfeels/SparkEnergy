module.exports = (Sequelize, DataTypes) => {
  const Comments = Sequelize.define("Comments", {
    // Here are the database tables
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Comments;
};
