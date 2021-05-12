export default (sequelize, DataTypes) => {
  const PlayerStats = sequelize.define(
    'player_stats',
    {
      gamestats_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      shooting_percentage: {
        type: DataTypes.FLOAT
      },
      three_pt_pct: {
        type: DataTypes.FLOAT
      },
      rebounds_per_game: {
        type: DataTypes.FLOAT
      },
      assists_per_game: {
        type: DataTypes.FLOAT
      },
      steals_per_game: {
        type: DataTypes.FLOAT
      },
      blocks_per_game: {
        type: DataTypes.FLOAT
      },
      player_id: {
        type: DataTypes.INTEGER
        // foreignKey: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );

  PlayerStats.associate = (models) => {
    PlayerStats.hasOne(models.PlayerInfo, {
      foreignKey: 'player_id'
    });
    // TeamInfo.belongsTo(models.PlayerInfo, {
    //   foreignKey: 'team_id'
    // });
  };

  return PlayerStats;
}