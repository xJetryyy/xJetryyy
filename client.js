var need = 3;
mainTimer.Restart(15); 
} 
 
function setRandMurd() { 
 e = Players.GetEnumerator(); 
 while(e.moveNext()) { 
  pls.push(e.Current); 
 } 
 mrd = Math.floor(Math.random() * Players.Count); 
if(pls[mrd].Properties.Lvl.Value >= 25)setMurd(pls[mrd]); 
else setRandMurd(); 
} 
 
function setMurd(player) { 
 Ui.GetContext().Hint.Value = player + " ? маняк"; 
 player.Properties.Kills.Value = 1; 
 player.Ui.Hint.Value = "ты маньяк  "; 
 player.inventory.Melee.Value = true; 
 player.inventory.MainInfinity.Value = true; 
 player.inventory.Secondary.Value = true; 
 player.Spawns.Spawn(); 
} 
 
function tryClearMurd() { 
 var e = Players.GetEnumerator(); 
 while(e.moveNext()) { 
  if(e.Current.Properties.Kills.Value == 1) { 
   e.Current.inventory.Melee.Value = false; 
  e.Current.inventory.Secondary.Value = false; 
  e.Current.inventory.MainInfinity.Value = false; 
   e.Current.Ui.Hint.Reset(); 
   e.Current.Properties.Kills.Value = 0; 
  } 
 } 
 pls = []; 
} 
 
defTickTimer.OnTimer.Add(function(timer) { 
 if(stateProp.Value !== "Game")return; 
 sumCount(); 
}); 
 
 
function sumCount() { 
if(stateProp.Value !== "Game")return; Teams.Get("Blue").Properties.Get("Deaths").Value = blueTeam.GetAlivePlayersCount() - 1; 
Teams.Get("Red").Properties.Get("Deaths").Value = redTeam.GetAlivePlayersCount() - 0; 
 if(blueTeam.GetAlivePlayersCount() == 1) { 
  Ui.GetContext().Hint.Value = "убийца пабедил"; 
  SetEndOfMatchMode(); 
 } 
} 
 
 
function addAll() { 
 var e = Players.GetEnumerator(); 
 while(e.moveNext()) { 
  if(e.Current.Team == null || e.Current.Team == redTeam)blueTeam.Add(e.Current); 
 } 
} 
 
function SpawnTeams() { 
 var e = Teams.GetEnumerator(); 
 while(e.moveNext()) { 
  Spawns.GetContext(e.Current).Spawn(); 
 } 
}
