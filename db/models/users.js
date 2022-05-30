module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: "id",
      },
      firstName: {
        type: DataTypes.STRING,
        field: "firstName",
      },
      lastName: {
        type: DataTypes.STRING,
        field: "lastName",
      },
      email: {
        type: DataTypes.STRING,
        field: "email",
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: "createdBy",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "createdAt",
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: "updatedBy",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updatedAt",
      },
      deletedBy: {
        type: DataTypes.INTEGER,
        field: "deletedBy",
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: "deletedAt",
      },
    },
    {
      underscored: false,
      freezeTableName: true,
      tableName: "users",
      timestamps: false,
    }
  );

  return users;
};
