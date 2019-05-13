
  const room = HBInit({ 
    roomName: 'ჩოგბურთი!',
    maxPlayers: 5,
    public: true,
    password: 'development',
    playerName: 'Umpire'
  });

  const map = `{"name":"Tenis JJOO Rio 2016 by HaxBall White Night from HaxMaps","width":470,"height":320,"spawnDistance":700,"bg":{"type":"grass","width":350,"height":200,"kickOffRadius":0,"cornerRadius":0},"vertexes":[{"x":-160,"y":0,"bCoef":0.1,"trait":"Line","color":"C7E6BD","curve":0},{"x":160,"y":0,"bCoef":0.1,"trait":"Line","color":"C7E6BD","curve":0},{"x":-160,"y":-160,"bCoef":0.1,"trait":"Line","color":"C7E6BD"},{"x":-160,"y":160,"bCoef":0.1,"trait":"Line","color":"C7E6BD"},{"x":160,"y":-160,"bCoef":0.1,"trait":"Line","color":"C7E6BD"},{"x":160,"y":160,"bCoef":0.1,"trait":"Line","color":"C7E6BD"},{"x":-350,"y":-160,"bCoef":0.1,"trait":"Line","color":"C7E6BD"},{"x":350,"y":-160,"bCoef":0.1,"trait":"Line","color":"C7E6BD"},{"x":-350,"y":160,"bCoef":0.1,"trait":"Line","color":"C7E6BD"},{"x":350,"y":160,"bCoef":0.1,"trait":"Line","color":"C7E6BD"},{"x":0,"y":-200,"bCoef":0.1,"trait":"barrier","vis":true,"color":"F0F0F0"},{"x":0,"y":200,"bCoef":0.1,"trait":"barrier","vis":true,"color":"F0F0F0"},{"x":-160,"y":-200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","vis":true,"color":"599653","curve":-155},{"x":160,"y":-200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","vis":true,"color":"599653","curve":155},{"x":-160,"y":200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","vis":true,"curve":-155,"color":"599653"},{"x":159,"y":200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","vis":true,"curve":155,"color":"599653"},{"x":-350,"y":0,"bCoef":0.1,"trait":"Line"},{"x":-325,"y":0,"bCoef":0.1,"trait":"Line"},{"x":350,"y":0,"bCoef":0.1,"trait":"Line"},{"x":325,"y":0,"bCoef":0.1,"trait":"Line"},{"x":-160,"y":200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","vis":true,"curve":-155,"color":"788a72"},{"x":159,"y":200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","vis":true,"curve":155,"color":"788a72"},{"x":-160,"y":-200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","vis":true,"color":"788a72","curve":-155},{"x":160,"y":-200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","vis":true,"color":"788a72","curve":155},{"x":0,"y":-200,"bCoef":0.1,"trait":"barrier","vis":true,"color":"f6faff"},{"x":0,"y":200,"bCoef":0.1,"trait":"barrier","vis":true,"color":"f6faff"},{"x":0,"y":200,"bCoef":0,"cMask":["red"],"vis":false},{"x":60,"y":200,"bCoef":0,"cMask":["red"],"vis":false},{"x":60,"y":320,"bCoef":0,"cMask":["red"],"vis":false},{"x":0,"y":-200,"bCoef":0,"cMask":["red"],"vis":false},{"x":60,"y":-200,"bCoef":0,"cMask":["red"],"vis":false},{"x":60,"y":-320,"bCoef":0,"cMask":["red"],"vis":false},{"x":0,"y":-200,"bCoef":0,"cMask":["blue"],"vis":false},{"x":-60,"y":-200,"bCoef":0,"cMask":["blue"],"vis":false},{"x":-60,"y":-320,"bCoef":0,"cMask":["blue"],"vis":false},{"x":0,"y":200,"bCoef":0,"cMask":["blue"],"vis":false},{"x":-60,"y":200,"bCoef":0,"cMask":["blue"],"vis":false},{"x":-60,"y":320,"bCoef":0,"cMask":["blue"],"vis":false},{"x":0,"y":-90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","vis":true,"color":"599653","curve":-180},{"x":0,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","vis":true,"curve":-180,"color":"599653"},{"x":0,"y":-90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","vis":true,"color":"599653","curve":180},{"x":0,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","vis":true,"curve":180,"color":"599653"}],"segments":[{"v0":0,"v1":1,"curve":0,"color":"C7E6BD","bCoef":0.1,"trait":"Line","y":0},{"v0":2,"v1":3,"color":"C7E6BD","bCoef":0.1,"trait":"Line"},{"v0":4,"v1":5,"color":"C7E6BD","bCoef":0.1,"trait":"Line"},{"v0":6,"v1":7,"color":"C7E6BD","bCoef":0.1,"trait":"Line"},{"v0":8,"v1":9,"color":"C7E6BD","bCoef":0.1,"trait":"Line"},{"v0":10,"v1":11,"vis":true,"color":"F0F0F0","bCoef":0.1,"trait":"barrier"},{"v0":12,"v1":13,"vis":true,"color":"599653","bCoef":0.9,"cMask":["ball"],"cGroup":["red","blue"],"trait":"Line","y":-200},{"v0":14,"v1":15,"curve":0,"vis":true,"color":"599653","bCoef":0.9,"cMask":["ball"],"cGroup":["red","blue"],"trait":"Line","y":200},{"v0":12,"v1":14,"curve":-155,"vis":false,"color":"fafafa","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":13,"v1":15,"curve":155,"vis":false,"color":"fafafa","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":16,"v1":17,"vis":true,"color":"C7E6BD","bCoef":0.1,"trait":"Line","y":0},{"v0":18,"v1":19,"vis":true,"color":"C7E6BD","bCoef":0.1,"trait":"Line","y":0},{"v0":20,"v1":21,"curve":0,"vis":true,"color":"788a72","bCoef":0.9,"cMask":["ball"],"cGroup":["red","blue"],"trait":"Line","y":200},{"v0":22,"v1":23,"vis":true,"color":"788a72","bCoef":0.9,"cMask":["ball"],"cGroup":["red","blue"],"trait":"Line","y":-200},{"v0":24,"v1":25,"vis":true,"color":"f6faff","bCoef":0.1,"trait":"barrier"},{"v0":26,"v1":27,"vis":false,"bCoef":0,"cMask":["red"],"y":200},{"v0":27,"v1":28,"vis":false,"bCoef":0,"cMask":["red"],"x":60},{"v0":29,"v1":30,"vis":false,"bCoef":0,"cMask":["red"],"y":-200},{"v0":30,"v1":31,"vis":false,"bCoef":0,"cMask":["red"],"x":60},{"v0":32,"v1":33,"vis":false,"bCoef":0,"cMask":["blue"]},{"v0":33,"v1":34,"vis":false,"bCoef":0,"cMask":["blue"],"x":-60},{"v0":35,"v1":36,"vis":false,"bCoef":0,"cMask":["blue"],"y":200},{"v0":36,"v1":37,"vis":false,"bCoef":0,"cMask":["blue"],"x":-60},{"v0":38,"v1":39,"curve":-180,"vis":false,"color":"fafafa","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","x":0},{"v0":40,"v1":41,"curve":180,"vis":false,"color":"fafafa","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","x":0}],"goals":[{"p0":[-360,210],"p1":[-120,210],"team":"red"},{"p0":[360,210],"p1":[120,210],"team":"blue"},{"p0":[360,-210],"p1":[120,-210],"team":"blue"},{"p0":[-360,-210],"p1":[-120,-210],"team":"red"},{"p0":[-360,-210],"p1":[-360,210],"team":"red"},{"p0":[360,-210],"p1":[360,210],"team":"blue"}],"discs":[{"radius":5,"pos":[0,-200],"color":"232323","bCoef":0.1,"cMask":["red","blue"],"trait":"goalPost"},{"radius":5,"pos":[0,200],"color":"232323","bCoef":0.1,"cMask":["red","blue"],"trait":"goalPost"}],"planes":[{"normal":[-1,0],"dist":-470,"bCoef":0.1,"cMask":["all"]},{"normal":[1,0],"dist":-470,"bCoef":0.1,"cMask":["all"]},{"normal":[0,1],"dist":-320,"bCoef":0.1,"cMask":["all"],"trait":"Line"},{"normal":[0,-1],"dist":-320,"bCoef":0.1,"cMask":["all"],"trait":"Line"}],"traits":{"ballArea":{"vis":true,"bCoef":2,"cMask":["ball"],"color":[250,250,250]},"barrier":{"vis":false,"bCoef":0,"cMask":["red","blue"]},"letters":{"vis":true,"bCoef":0,"cMask":[""],"color":[255,255,255]},"goalPost":{"radius":3,"invMass":0,"cMask":["red","blue"]},"goalNet":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"Line":{"vis":true,"bCoef":0,"cMask":[""],"color":["C7E6BD"]}},"playerPhysics":{"acceleration":0.17,"kickStrength":0.1,"bCoef":3.48},"ballPhysics":{"color":"eafb13","radius":9}}`;
  room.setScoreLimit(0);
  room.setTimeLimit(0);
  room.setTeamsLock(true);  
  room.setCustomStadium(map);

  function updateAdmins() { 
    let players = room.getPlayerList().filter((player) => player.id != 0 );
    if (players.length == 0 ) return;
    if (players.find((player) => player.admin) != null ) return;
    room.setPlayerAdmin(players[0].id, true);
  }

  room.onPlayerJoin = function(player) {
    updateAdmins();
  }

  room.onPlayerLeave = function(player) {
    updateAdmins();
  }

  room.onTeamGoal = (team) => {
    const mapping = {
      1: 15,
      2: 30,
      3: 40
    }

    const advantages = 'Ad';
    
    let winner = false;
    let { red, blue } = room.getScores();
    
    if ((red >= 3 && blue >= 3)) {
      if (red > blue && red - blue == 1) {
        red = advantages;
        blue = mapping[3];
      }
      else if (red < blue && blue - red == 1) {
        blue = advantages;
        red = mapping[3];
      }
      else if (red == blue) {
        red = blue = mapping[3];
      }
      else {
        const { red, blue } = room.getScores();

        if (red - blue == 2) {
          winner = 1;
        }
        else if (blue - red == 2) {
          winner = 2;
        }
      }
    }
    else if (red > 3) {
      winner = 1;
    }
    else if (blue > 3) {
      winner = 2;
    }
    else {
      red = mapping[red] || 0;
      blue = mapping[blue] || 0;
    }

    const players = room.getPlayerList();

    const playerRed = players.filter((player) => {
      return player.team == 1;
    });

    const playerBlue = players.filter((player) => {
      return player.team == 2;
    });

    if (typeof playerBlue !== 'undefined' && playerRed !== 'undefined' && !winner) {
      room.sendChat(`${playerRed[0].name} [${red}] - ${playerBlue[0].name} [${blue}]`);
    }

    if (winner) {
      const player = players.filter((player) => {
        return player.team == winner;
      });

      room.sendChat(`გამარჯვებულია - ${player[0].name}`);
    }
  }
