// Id (1)
// Name (Mario)
// Img (www...
// Attacks:  
// Hit Points


// Character has many games

// Character has many attacks

// Creating our User model
module.exports = function(sequelize, DataTypes) {
    var Characters = sequelize.define("Characters", {
    
        // name cannot be null and should be unique
        //DO WE NEED AN ID--PROBABLY NOT
        // id: {
        //     //make it auto??
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     allowNull: false,
        //     unique: true,
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            // validate: {
            //     isEmail: true
            // }
        },
    
        attack: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len: [8, 30]
            // }
        }// },
    
        // hitpoints: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     defaultValue: 20,
        //     validate: {
        //         len: [0, 10]
        //     }
        // }
    });
  

// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password


Characters.associate = function(models) {
    // Characters.hasMany(models.Game, {
    //     // onDelete: "cascade"
    // });
    Characters.hasMany(models.Attack, {
        // onDelete: "cascade"
    });
};
return Characters;
};
