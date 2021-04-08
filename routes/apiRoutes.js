/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the NBA Info Insiders!');
});

/// //////////////////////////
/// /// Platform Endpoints ///
/// //////////////////////////
router.route('/platform')
  .get(async (req, res) => {
    try {
      const platforms = await db.Platform.findAll();
      const reply = platforms.length > 0 ? { data: platforms } : { message: 'no results found' };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error('Server Error at Platform GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });

router.route('/platform/:platform_id')
  .get(async (req, res) => {
    try {
      const platform = await db.Platform.findAll({
        where: {
          platform_id: req.params.platform_id
        }
      });
  
      res.json(platform);
    } catch (err) {
      console.error(err);
      res.error('Server Error at platform_id GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });


/// /////////////////////////////////
/// /// Player Biostats Endpoints ///
/// /////////////////////////////////
router.route('/player_biostats')
  .get(async (req, res) => {
    try {
      const biostats = await db.PlayerBiostats.findAll();
      res.json(biostats);
    } catch (err) {
      console.error(err);
      res.error('Server Error at Player Biostats GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });

router.route('/player_biostats/:biostats_id')
  .get(async (req, res) => {
    try {
      const biostats = await db.PlayerBiostats.findAll({
        where: {
          biostats_id: req.params.biostats_id
        }
      });
      res.json(biostats);
    } catch (err) {
      console.error(err);
      res.error('Server Error at biostats_id GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });


/// /////////////////////////////
/// /// Player Info Endpoints ///
/// /////////////////////////////
router.route('/player_info')
  .get(async (req, res) => {
    try {
      const info = await db.PlayerInfo.findAll();
      res.send(info);
    } catch (err) {
      console.error(err);
      res.error('Server Error at Player Info GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    try {
      await db.PlayerInfo.update(
        {
          salary: req.body.meal_salary,
          jersey_number: req.body.jersey_number,
          position: req.body.position,
          player_college: req.body.player_college,
          nba_debut: req.body.nba_debut,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          team_id: req.body.team_id
        },
        {
          where: {
            player_id: req.body.player_id
          }
        }
      );
      res.send('Player Info Successfully Updated');
    } catch (err) {
      console.error(err);
      res.error('Server Error at Player Info PUT');
    }
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });

router.route('/player_info/:player_id')
  .get(async (req, res) => {
    try {
      const info = await db.PlayerInfo.findAll({
        where: {
          player_id: req.params.player_id
        }
      });
      res.json(info);
    } catch (err) {
      console.error(err);
      res.error('Server Error at player_id GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    try {
      await db.PlayerInfo.destroy({
        where: {
          player_id: req.params.player_id
        }
      });
      res.send('Successfully Deleted');
    } catch (err) {
      console.error(err);
      res.error('Server Error at player_id DELETE');
    }
  })


/// //////////////////////////////
/// /// Player Stats Endpoints ///
/// //////////////////////////////
router.route('/player_stats')
  .get(async (req, res) => {
    try {
      const stats = await db.PlayerStats.findAll();
      res.json(stats);
    } catch (err) {
      console.error(err);
      res.error('Server Error at Player Stats GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    try {
      await db.PlayerStats.update(
        {
          shooting_percentage: req.body.shooting_percentage,
          three_pt_pct: req.body.three_pt_pct,
          rebounds_per_game: req.body.rebounds_per_game,
          assists_per_game: req.body.assists_per_game,
          steals_per_game: req.body.steals_per_game,
          blocks_per_game: req.body.blocks_per_game,
          player_id: req.body.player_id
        },
        {
          where: {
            gamestats_id: req.body.gamestats_id
          }
        }
      );
      res.send('Player Stats Successfully Updated');
    } catch (err) {
      console.error(err);
      res.error('Server Error at Player Stats PUT');
    }
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });

router.route('/player_stats/:gamestats_id')
  .get(async (req, res) => {
    try {
      const gamestats = await db.PlayerStats.findAll({
        where: {
          gamestats_id: req.params.gamestats_id
        }
      });
      res.json(gamestats);
    } catch (err) {
      console.error(err);
      res.error('Server Error at gamestats_id GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    try {
      await db.PlayerStats.destroy({
        where: {
          gamestats_id: req.params.gamestats_id
        }
      });
      res.send('Successfully Deleted');
    } catch (err) {
      console.error(err);
      res.error('Server Error at gamestats_id DELETE');
    }
  })


/// //////////////////////////////
/// /// Social Media Endpoints ///
/// //////////////////////////////
router.route('/socialmedia')
  .get(async (req, res) => {
    try {
      const social = await db.SocialMedia.findAll();
      res.json(social);
    } catch (err) {
      console.error(err);
      res.error('Server Error at Social Media GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });

router.route('/socialmedia/:social_id')
  .get(async (req, res) => {
    try {
      const social = await db.SocialMedia.findAll({
        where: {
          social_id: req.params.social_id
        }
      });
      res.json(social);
    } catch (err) {
      console.error(err);
      res.error('Server Error at social_id GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });


/// //////////////////////////////
/// /// Stadium Info Endpoints ///
/// //////////////////////////////
router.route('/stadium_info')
  .get(async (req, res) => {
    try {
      const stadium = await db.StadiumInfo.findAll();
      res.json(stadium);
    } catch (err) {
      console.error(err);
      res.error('Server Error at Stadium Info GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });

router.route('/stadium_info/:stadium_id')
  .get(async (req, res) => {
    try {
      const stadium= await db.StadiumInfo.findAll({
        where: {
          stadium_id: req.params.stadium_id
        }
      });
      res.json(stadium);
    } catch (err) {
      console.error(err);
      res.error('Server Error at stadium_id GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });


/// ///////////////////////////
/// /// Team Info Endpoints ///
/// ///////////////////////////
router.route('/team_info')
  .get(async (req, res) => {
    try {
      const teamI = await db.TeamInfo.findAll();
      res.json(teamI);
    } catch (err) {
        console.error(err);
        res.error('Server Error at Team Info GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });

router.route('/team_info/:team_id')
  .get(async (req, res) => {
    try {
      const teamI = await db.TeamInfo.findAll({
        where: {
          team_id: req.params.team_id
        }
      });
      res.json(teamI);
    } catch (err) {
      console.error(err);
      res.error('Server Error at stadium_id GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });


/// ////////////////////////////
/// /// Team Staff Endpoints ///
/// ////////////////////////////
router.route('/team_staff')
  .get(async (req, res) => {
    try {
      const staff = await db.TeamStaff.findAll();
      res.json(staff);
    } catch (err) {
      console.error(err);
      res.error('Server Error at Team Staff GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable')
  })
  .put(async (req, res) => {
    try {
      await db.TeamStaff.update(
        {
          owner: req.body.owner,
          head_coach: req.body.head_coach,
          head_physician: req.body.head_physician,
          general_manager: req.body.general_manager,
          ceo: req.body.ceo,
          cfo: req.body.cfo
        },
        {
          where: {
            staff_id: req.body.staff_id
          }
        }
      );
      res.send('Team Staff Successfully Updated');
    } catch (err) {
      console.error(err);
      res.error('Server Error at Team Staff PUT');
    }
  })
  .delete(async (req, res) => {
    try {
      await db.TeamStaff.destroy({
        where: {
          staff_id: req.params.staff_id
        }
      });
      res.send('Successfully Deleted');
    } catch (err) {
      console.error(err);
      res.error('Server Error at staff_id DELETE');
    }
  });

router.route('/team_staff/:staff_id')
  .get(async (req, res) => {
    try {
      const staff = await db.TeamStaff.findAll({
        where: {
          staff_id: req.params.staff_id
        }
      });
      res.json(staff);
    } catch (err) {
      console.error(err);
      res.error('Server Error at staff_id GET');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    try {
      await db.TeamStaff.destroy({
        where: {
          staff_id: req.params.staff_id
        }
      });
      res.send('Successfully Deleted');
    } catch (err) {
      console.error(err);
      res.error('Server Error at staff_id DELETE');
    }
  });


/// /////////////////////////////////
/// //////Custom SQL Endpoint////////
/// /////////////////////////////////
router.get("/custom", async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT,
    });
    console.log("Result: ", result);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
})


/// ///////////////////////////
/// /// Custom SQL Endpoint ///
/// ///////////////////////////
const teamCustom = `SELECT team_location, team_name, year_founded, head_coach, general_manager
FROM team_info JOIN team_staff
	USING (team_id)
ORDER BY year_founded, team_location;`;

router.route('/custom')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(teamCustom, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });


/// ///////////////////////////
/// /// Custom SQL Endpoint ///
/// ///////////////////////////
const playerCustom = `SELECT first_name, last_name, height(in), position, shooting_percentage, three_pt_pct
FROM player_info JOIN player_stats
	USING (player_id)
JOIN player_biostats
  USING (player_id)
ORDER BY position, shooting_percentage, three_pt_pct;`;

router.route('/custom')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(playerCustom, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });

export default router;