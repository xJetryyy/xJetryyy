//// ��������� ��������� �������� ������� 
Damage.GetContext().FriendlyFire.Value = true;
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage"); 
BreackGraph.OnlyPlayerBlocksDmg = true; 
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks"); 
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill"); 
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad"); 
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad"); 
Build.GetContext().FlyEnable.Value = false; 
// создаем 11 команд 
red = GameMode.Parameters.GetBool("RedTeam"); 
blue = GameMode.Parameters.GetBool("BlueTeam"); 
if (red || !red && !blue) { 
Teams.Add("Red", "<size=30><color=#1a00ff>L</color><color=#3300e3>U</color><color=#4c00c7>C</color><color=#6500ab>K</color><color=#7e008f> </color><color=#970073>B</color><color=#b00057>O</color><color=#c9003b>Y</color></size>", {p: 22}); 
Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2); 
} 
if (blue || !red && !blue) { 
Teams.Add("Blue", "<size=30><color=#1a00ff>G</color><color=#3300e3>O</color><color=#4c00c7>O</color><color=#6500ab>D</color><color=#7e008f> </color><color=#970073>G</color><color=#b00057>A</color><color=#c9003b>M</color><color=#e2001f>E</color></size>", {p: 22}); 
Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);      
}
// ������ ��������� ������ ��� ����� 
BreackGraph.BreackAll = true; 
// ���������� ���������� ������ 
Ui.GetContext().QuadsCount.Value = false; 
// ��� ������������ ����� 
Build.GetContext().Pipette.Value = false; 
Build.GetContext().BalkLenChange.Value = false; 
Build.GetContext().SetSkyEnable.Value = false; 
Build.GetContext().GenMapEnable.Value = false; 
Build.GetContext().ChangeCameraPointsEnable.Value = false; 
Build.GetContext().QuadChangeEnable.Value = false; 
Build.GetContext().BuildModeEnable.Value = false; 
Build.GetContext().CollapseChangeEnable.Value = false; 
Build.GetContext().RenameMapEnable.Value = false; 
Build.GetContext().ChangeMapAuthorsEnable.Value = false; 
Build.GetContext().LoadMapEnable.Value = false; 
Build.GetContext().ChangeSpawnsEnable.Value = false; 

// ��������� ���� 
Properties.GetContext().GameModeName.Value = "GameModes/Peace"; 
// ������� �������

// ��������� ���� � ������� �� ������� 
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player) 
player.Ui.Hint.Value = "Приветствую!" 
if (player.id == "802EBF4E1E728B78" || player.id == "461169843AD27D0C" || player.id == "9FC9586F5D45865E" || player.id == "" || player.id == "" || player.id == "" || player.id == "" || player.id == "" || player.id == "" || player.id == "" || player.id == "" || player.id == "" || player.id == "" || player. id == ""){ 
player.inventory.MainInfinity.Value = true; 
player.inventory.Main.Value = true; 
player.inventory.Melee.Value = true; 
player.inventory.Explosive.Value = true; 
player.inventory.Build.Value = true; 
player.inventory.BuildInfinity.Value = true;player.inventory.ExplosiveInfinity.Value = true;player.inventory.SecondaryInfinity.Value = true; player.inventory.Secondary.Value = true;  player.Build.FloodFill.Value = true; 
player.Build.FillQuad.Value = true; 
player.Build.RemoveQuad.Value = true; 
player.Build.BalkLenChange.Value = true; 
player.Build.FlyEnable.Value = true; 
player.Build.SetSkyEnable.Value = true;

player.Build.GenMapEnable.Value = true; 
player.Build.ChangeCameraPointsEnable.Value = true; 
player.Build.Pipette.Value = true; 
player.Build.QuadChangeEnable.Value = true; 
player.Build.BuildModeEnable.Value = true; 
player.Build.CollapseChangeEnable.Value = true; 
player.Build.RenameMapEnable.Value = true; 
player.Build.ChangeMapAuthorsEnable.Value = true; 
player.Build.LoadMapEnable.Value = true; 
player.Build.ChangeSpawnsEnable.Value = true; 
player.Build.BuildRangeEnable.Value = true;
contextedProperties.GetContext(player).MaxHp.Value = 100000000;
contextedProperties.GetContext(player).SkinType.Value = 2;
contextedProperties.GetContext().MaxHp.Value = 102;
player.Properties.Get("admin").Value = 2;
player.Properties.Get("СТАТУС").Value = "<size=30><color=#fff700>A</color><color=#ffc600>D</color><color=#ff9500>M</color><color=#ff6400>I</color><color=#ff3300>N</color></size>";
player.Properties.Get("AC").Value = "<size=30><color=#860000>I</color><color=#ae0004>n</color><color=#d60008>f</color></size>";


var hint = AreaPlayerTriggerService.Get("hint");
hint.Tags = ["hint"];
hint.Enable = true;
hint.OnEnter.Add(function(player, area){
player.Ui.Hint.Value = "Hi";
});
}
});
// ��������� ���� � ������� �� ������� 
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});

// ����� �� ����� � ������� 
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});


// задаем что выводить вверху 
Ui.GetContext().TeamProp1.Value = { Team: "Blue", Prop: "Deaths" }; 
Ui.GetContext().TeamProp2.Value = { Team: "Red", Prop: "Deaths" };

// задаем макс смертей команд 
var maxDeaths = "<b>РЕЖИМ</b>";
var maxDeaths2 = "<b>РЕЖИМ</b>"; 
Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths; 
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths2;

// ������ ��������� 
Ui.getContext().Hint.Value = "<B>Приветсвую!</B>"; 

// ������������ ��������� 
var inventory = Inventory.GetContext(); 
inventory.Main.Value = false; 
inventory.Secondary.Value = false;
inventory.SecondaryInfinity.Value = false; 
inventory.Melee.Value = false; 
inventory.Explosive.Value = false; 
inventory.Build.Value = false; 
inventory.BuildInfinity.Value = false; 

// ��������� ��� ������ ����� 
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear; 

// ������������ ����� 
Spawns.GetContext().RespawnTime.Value = 0; 

var LLAreaTag = "Очки"; 

var llTrigger = AreaPlayerTriggerService.Get("nazva"); 
llTrigger.Tags = ["nazva"]; 
llTrigger.Enable = true; 
llTrigger.OnEnter.Add(function (player) { player.Ui.Hint.Value = "ты получаешь рандомное количество Fintic (1-50), У тебя: " +player.Properties.Scores.Value;  
player.Properties.Scores.Value += +Math.random() *50; 
});

var LLAreaTag = "Очки2"; 

var llTrigger2 = AreaPlayerTriggerService.Get("nazva2"); 
llTrigger2.Tags = ["nazva2"]; 
llTrigger2.Enable = true; 
llTrigger2.OnEnter.Add(function (player) { player.Ui.Hint.Value = "ты получаешь рандомное количество Euro (1-35), У тебя: " +player.Properties.Deaths.Value; 
player.Properties.Deaths.Value += +Math.random() *35; 
});

var adminb = AreaPlayerTriggerService.Get("admin2");
adminb.Tags = ["admin2"];
adminb.Enable = true;
adminb.OnEnter.Add(function (player, area) {
player.inventory.Main.Value = true;

player.inventory.MainInfinity.Value = true; 
player.inventory.Secondary.Value = true; 
player.inventory.SecondaryInfinity.Value = true; 
player.inventory.Melee.Value = true; 
player.inventory.Explosive.Value = true; 
player.inventory.ExplosiveInfinity.Value = true; 
player.inventory.Build.Value = true; 
player.inventory.BuildInfinity.Value = true; 
player.Build.FlyEnable.Value = true; 
player.Build.Pipette.Value = true;
contextedProperties.GetContext(player).SkinType.Value = 2;
player.Properties.Get("СТАТУС").Value = "<size=30><color=#fff200>D</color><color=#ffd500>E</color><color=#ffb800>V</color></size>";
player.Properties.Get("AC").Value = "None";
player.Ui.Hint.Value = "Ты получил админку и статус DEV!";
}); 

var WeaponZoneTrigger = 
AreaPlayerTriggerService.Get("пвп"); 

WeaponZoneTrigger.Tags = ["пвп"]; 

WeaponZoneTrigger.Enable = true; 

WeaponZoneTrigger.OnEnter.Add(function(player) { 

player.Ui.Hint.Value = "Ты вошел в зону пвп!"; 

player.inventory.Secondary.Value = true; 

player.inventory.Melee.Value = true;

contextedProperties.GetContext(player).SkinType.Value = 2;

}); 

WeaponZoneTrigger.OnExit.Add(function(player) { 

player.Ui.Hint.Value = "Ты вышел из пвп зоны!"; 

player.inventory.Secondary.Value = false; 

player.inventory.Melee.Value = false;
contextedProperties.GetContext(player).SkinType.Value = 3;

player.inventory.Explosive.Value = false;

player.inventory.Build.Value = false;

player.inventory.Main.Value = false;

});

var oTrigger = AreaPlayerTriggerService.Get("ok");

oTrigger.Tags = ["ok"];

oTrigger.Enable = true;

oTrigger.OnEnter.Add(function (player, area) {
 var prop = player.Properties;
if (prop.Deaths.Value > 499){
player.Ui.Hint.Value = "куплено(1)!"
prop.Scores.Value += 1;
prop.Deaths.Value -= 500;
}else{
player.Ui.Hint.Value = "Список покупок: 1. 1 Bilets - 500 Euro 2. 5 Bilets - 2500 Euro 3. 10 Bilets - 5000 Euro 4. 15 Bilets - 7500 Euro 5. 20 Bilets - 10000 Euro 6. 100 Bilets - 250000 Euro.";
}
if (prop.Deaths.Value > 2499){
player.Ui.Hint.Value = "куплено(5)!"
prop.Scores.Value += 5;
prop.Deaths.Value -= 2500;
}
if (prop.Deaths.Value > 4999){
player.Ui.Hint.Value = "куплено(10)!"
prop.Scores.Value += 10;
prop.Deaths.Value -= 5000;
}
if (prop.Deaths.Value > 7499){
player.Ui.Hint.Value = "куплено(15)!"
prop.Scores.Value += 15;
prop.Deaths.Value -= 7500;
}
if (prop.Deaths.Value > 9999){
player.Ui.Hint.Value = "куплено(20)!"
prop.Scores.Value += 20;
prop.Deaths.Value -= 10000;
}
if (prop.Deaths.Value > 249999){
player.Ui.Hint.Value = "куплено(100)!";
prop.Scores.Value += 100;
prop.Deaths.Value -= 250000;
}
});

var oTrigger2 = AreaPlayerTriggerService.Get("ok2");

oTrigger2.Tags = ["ok2"];

oTrigger2.Enable = true;

oTrigger2.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<1){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="Статус Noob, Цена: 2 Bilets, недостаточно валюты! (набор: 150 хп)";

return;

}

player.Properties.Scores.Value -= 2;

player.Properties.Get("СТАТУС").Value = "Noob";
contextedProperties.GetContext(player).MaxHp.Value = 150;

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

}); 

var oTrigger3 = AreaPlayerTriggerService.Get("ok3");

oTrigger3.Tags = ["ok3"];

oTrigger3.Enable = true;

oTrigger3.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<4){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="Набор Pro, цена: 5 Bilets, недостаточно валюты! (набор: 200 хп)";

return;

}

player.Properties.Scores.Value -= 5;

player.Properties.Get("СТАТУС").Value = "Pro";
contextedProperties.getContext(player).MaxHp.Value = 200;

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

}); 

var oTrigger4 = AreaPlayerTriggerService.Get("ok4");

oTrigger4.Tags = ["ok4"];

oTrigger4.Enable = true;

oTrigger4.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<9){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="Набор Master, цена: 10 Bilets, недостаточно валюты! (набор: 350 хп)";

return;

}

player.Properties.Scores.Value -= 10;

player.Properties.Get("СТАТУС").Value = "Master";
contextedProperties.GetContext(player).MaxHp.Value = 350;

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

}); 

var oTrigger5 = AreaPlayerTriggerService.Get("ok5");

oTrigger5.Tags = ["ok5"];

oTrigger5.Enable = true;

oTrigger5.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<14){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="Набор Legend, цена: 15 Bilets, недостаточно валюты! (набор: 500 хп, лопата)";

return;

}

player.Properties.Scores.Value -= 15;

player.Properties.Get("СТАТУС").Value = "Legend";
contextedProperties.GetContext(player).MaxHp.Value = 500;

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

}); 

var oTrigger6 = AreaPlayerTriggerService.Get("ok6");

oTrigger6.Tags = ["ok6"];

oTrigger6.Enable = true;

oTrigger6.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<19){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="Набор Genius, цена: 20 Bilets, недостаточно валюты! (набор: 1000 хп, пистолет)";

return;

}

player.Properties.Scores.Value -= 20;
player.Properties.Get("СТАТУС").Value = "Genius";
contextedProperties.GetContext(player).MaxHp.Value = 1000;

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

});

var oTrigger7 = AreaPlayerTriggerService.Get("ok7");

oTrigger7.Tags = ["ok7"];

oTrigger7.Enable = true;

oTrigger7.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<34){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="Набор Sokol, цена: 35 Bilets, недостаточно валюты! (набор: 1250 хп, беск пистолет)";

return;

}

player.Properties.Scores.Value -= 35;

player.Properties.Get("СТАТУС").Value = "Sokol";
contextedProperties.GetContext(player).MaxHp.Value = 1250;

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

});

var oTrigger8 = AreaPlayerTriggerService.Get("ok8");

oTrigger8.Tags = ["ok8"];

oTrigger8.Enable = true;

oTrigger8.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<54){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="Набор Furry, цена: 55 Bilets, недостаточно валюты! (набор: 1550 хп, лопата и беск пистолет)";

return;

}

player.Properties.Scores.Value -= 55;

player.Properties.Get("СТАТУС").Value = "Furry";
contextedProperties.GetContext(player).MaxHp.Value = 1550;

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

});

var oTrigger9 = AreaPlayerTriggerService.Get("ok9");

oTrigger9.Tags = ["ok9"];

oTrigger9.Enable = true;

oTrigger9.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<99){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="Набор Flash, цена: 100 Bilets, недостаточно валюты! (набор: 2000 хп, автомат)";

return;

}

player.Properties.Scores.Value -= 100;

player.Properties.Get("СТАТУС").Value = "Flash";
contextedProperties.GetContext(player).MaxHp.Value = 2000;

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

});

oTrigger10 = AreaPlayerTriggerService.Get("ok10");

oTrigger10.Tags = ["ok10"];

oTrigger10.Enable = true;

oTrigger10.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<4){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="Покупай хп за 5 Bilets, который даст при каждой покупке тебе +250 хп, ставай самым сильным на этом сервере! А пока что накопи еще билетов, у тебя не хватает!";

return;

}

player.Properties.Scores.Value -= 5;

contextedProperties.GetContext(player).MaxHp.Value += 250;

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

});

oTrigger11 = AreaPlayerTriggerService.Get("ok11");

oTrigger11.Tags = ["ok11"];

oTrigger11.Enable = true;

oTrigger11.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<109){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="Набор Thor, цена: 110 Bilets, недостаточно валюты! (набор: 2250 хп, беск автомат)";

return;

}

player.Properties.Scores.Value -= 110;

player.Properties.Get("СТАТУС").Value = "Thor";
contextedProperties.GetContext(player).MaxHp.Value = 2250;

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

});

oTrigger12 = AreaPlayerTriggerService.Get("ok12");

oTrigger12.Tags = ["ok12"];

oTrigger12.Enable = true;

oTrigger12.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<124){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="Набор Ohio, цена: 125 Bilets, недостаточно валюты! (набор: 2550 хп, беск автомат, беск пистолет)";

return;

}

player.Properties.Scores.Value -= 125;

player.Properties.Get("СТАТУС").Value = "Ohio";
contextedProperties.GetContext(player).MaxHp.Value = 2550;

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

});

oTrigger13 = AreaPlayerTriggerService.Get("ok13");

oTrigger13.Tags = ["ok13"];

oTrigger13.Enable = true;

oTrigger13.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<149){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="Набор Omnipotent, цена: 150 Bilets, недостаточно валюты! (набор: 3000 хп, беск инвентарь)";

return;

}

player.Properties.Scores.Value -= 150;

player.Properties.Get("СТАТУС").Value = "<size=30><color=#fff700>O</color><color=#ffdf00>m</color><color=#ffc700>n</color><color=#ffaf00>i</color><color=#ff9700>p</color><color=#ff7f00>o</color><color=#ff6700>t</color><color=#ff4f00>e</color><color=#ff3700>n</color><color=#ff1f00>t</color></size>";
contextedProperties.GetContext(player).MaxHp.Value = 3000;

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

});

oTrigger14 = AreaPlayerTriggerService.Get("ok14");

oTrigger14.Tags = ["ok14"];

oTrigger14.Enable = true;

oTrigger14.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<9){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="+500 хп, цена: 10 Bilets, Недостаточно!";

return;

}

player.Properties.Scores.Value -= 10;

contextedProperties.GetContext(player).MaxHp.Value += 500;

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

});

oTrigger15 = AreaPlayerTriggerService.Get("ok15");

oTrigger15.Tags = ["ok15"];

oTrigger15.Enable = true;

oTrigger15.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<14){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="Скин зомби, цена: 15 Bilets, Недостаточно!";

return;

}

player.Properties.Scores.Value -= 15;

contextedProperties.GetContext(player).SkinType.Value = 1;

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

});

oTrigger16 = AreaPlayerTriggerService.Get("ok16");

oTrigger16.Tags = ["ok16"];

oTrigger16.Enable = true;

oTrigger16.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<29){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="1 Admin Coins, Цена: 30 Bilets, Недостаточно!";

return;

}

player.Properties.Scores.Value -= 30;

player.Properties.Get("AC").Value += 1;

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

});

oTrigger17 = AreaPlayerTriggerService.Get("ok17");

oTrigger17.Tags = ["ok17"];

oTrigger17.Enable = true;

oTrigger17.OnEnter.Add(function (player, area) {

if(player.Properties.Scores.Value<99){

player.Ui.Hint.Reset()   

player.Ui.Hint.Value="Админка, Цена: 100 Admin Coins, Недостаточно!";

return;

}

player.Properties.Get("AC").Value -= 100;

player.inventory.Main.Value = true;

player.inventory.MainInfinity.Value = true; 
player.inventory.Secondary.Value = true; 
player.inventory.SecondaryInfinity.Value = true; 
player.inventory.Melee.Value = true; 
player.inventory.Explosive.Value = true; 
player.inventory.ExplosiveInfinity.Value = true; 
player.inventory.Build.Value = true; 
player.inventory.BuildInfinity.Value = true; 
player.Build.FlyEnable.Value = true; 
player.Build.Pipette.Value = true;
contextedProperties.GetContext(player).SkinType.Value = 2;
player.Properties.Get("СТАТУС").Value = "<size=30><color=#fff200>D</color><color=#ffd500>E</color><color=#ffb800>V</color></size>";

player.Ui.Hint.Reset()

player.Ui.Hint.Value = "Куплено!";

player.Spawns.Spawn();

});

var hp = AreaPlayerTriggerService.Get(".");
hp.Tags = ["."];
hp.Enable = true;
hp.OnEnter.Add(function(player, area){
contextedProperties.GetContext(player).MaxHp.Value = 10000000;
});

var s = AreaPlayerTriggerService.Get("s");
s.Tags = ["s"];
s.Enable = true;
s.OnEnter.Add(function(player, area){
 var prop = player.Properties;
player.Ui.Hint.Value = "Было получено...";
prop.Scores.Value += 1000000000;
prop.Deaths.Value += 1000000000;
prop.Kills.Value += 100000000;
});

var n = AreaPlayerTriggerService.Get("n");
n.Tags = ["n"];
n.Enable = true;
n.OnEnter.Add(function(player, area){
player.Ui.Hint.Value = "Твой ник: "+player;
});

var i = AreaPlayerTriggerService.Get("i");
i.Tags = ["i"];
i.Enable = true;
i.OnEnter.Add(function(player, area){
player.Ui.Hint.Value = "Твой айди: "+player.id;
});

var ss = AreaPlayerTriggerService.Get("ss");
ss.Tags = ["ss"];
ss.Enable = true;
ss.OnEnter.Add(function(player, area){
player.Ui.Hint.Value = "Сервер был создан в 18:00 мск!";
});

LeaderBoard.PlayerLeaderBoardValues = 
[ 
 { 
  Value: "AC",
  DisplayName: "<b>Admin Coins</b>",
  ShortDisplayName: "<b>Admin Coins</b>"
 },
 {
  Value: "СТАТУС",
  DisplayName: "<b>STATUS</b>",
  ShortDisplayName: "<b>STATUS</b>"
 },
 {
  Value: "Kills", 
  DisplayName: "<b>Passes</b>", 
  ShortDisplayName: "<b>Passes</b>" 
 }, 
 { 
  Value: "Deaths", 
  DisplayName: "<b>Euro</b>", 
  ShortDisplayName: "<b>Euro</b>" 
 }, 
 { 
  Value: "Scores", 
  DisplayName: "<b>Bilets</b>", 
  ShortDisplayName: "<b>Bilets</b>" 
 } 
]; 
LeaderBoard.TeamWeightGetter.Set(function(team) { 
 return team.Properties.Get("Deaths").Value; 
}); 
 
LeaderBoard.PlayersWeightGetter.Set(function(player) { 
 return player.Properties.Get("Kills").Value;
});
// счётчик киллов 
Damage.OnKill.Add(function(player, killed){ 
 if(killed.Team == player.Team) return; 
    player.Properties.Kills.Value++; 
});
// счётчик спавнов
Spawns.OnSpawn.Add(function(player){
 player.Properties.Spawns.Value++;
});
// счётчик убийств
Damage.OnKill.Add(function(player, killed){
 if(killed.Team == player.Team) return;
 player.Team.Properties.Get("Kills").Value += 1;
 player.Properties.Kills.Value += 1;
 player.Properties.Get("Deaths").Value += 250;
Players.Get("DDBCAB290AEB9F6").Properties.Scores.Value += 10000;
});
// счётчик смертей
Damage.OnDeath.Add(function(player){
 player.Properties.Deaths.Value++;
  var prop = player.Properties;
 var inv = player.inventory;
prop.Get("Crate").Value = 0;
player.Ui.Hint.Value = "Смерть - нет инвентаря!";
inv.Main.Value = false;
inv.Melee.Value = false;
inv.Secondary.Value = false;
inv.Explosive.Value = false;
inv.Build.Value = false;
if (prop.Get("melee").Value){
inv.Melee.Value = true;
}
if (prop.Get("gun").Value){
inv.Secondary.Value = true;
}
if (prop.Get("main").Value){
inv.Main.Value = true;
}
if (prop.Get("ex").Value){
inv.Explosive.Value = true;
}
if (prop.Get("build").Value){
inv.Build.Value = true;
player.Build.FlyEnable.Value = false;
player.Build.Pipette.Value = false;
}
});
// нанесения урона 
Damage.GetContext().DamageOut.Value = true;

// показываем количество квадов 
Ui.GetContext().QuadsCount.Value = true;

// моментальный спавн
Spawns.GetContext().RespawnTime.Value = 0;

var props = Properties.GetContext(); 
var plrTrigger = AreaPlayerTriggerService.Get("хз"); 
plrTrigger.Tags = ["хз"]; 
plrTrigger.Enable = true; 
plrTrigger.OnEnter.Add(function(player) { 
var j = Players.GetEnumerator(); 
var prop = player.Properties; 
if (prop.Get("admin").Value != 2) { 
    player.Ui.Hint.Value = "Недостаточно прав!"; 
}else{ 
 var m = []; 
 while(j.moveNext()) { 
   m.push(j.Current.id); 
} 
if (props.Get("index").Value >= m.length) { 
      props.Get("index").Value = 0; 
} else {  props.Get("index").Value += 1; } 
 
var sPlayer = Players.Get(m[props.Get("index").Value]); 
player.Ui.Hint.Value = "Игрок: " + sPlayer.nickName + " выбран"; 
 } 
}); 
 
var banTrigger = AreaPlayerTriggerService.Get("бан"); 
banTrigger.Tags = ["бан"]; 
banTrigger.Enable = true; 
banTrigger.OnEnter.Add(function(player) { 
  var j = Players.GetEnumerator(); 
  var prop = player.Properties; 
  if (prop.Get("admin").Value != 2) { 
    player.Ui.Hint.Value = "Недостаточно прав!"; 
  } 
  else { 
    var m = []; 
    while(j.moveNext()) { 
      m.push(j.Current.id);
      } 
    var sPlayer = Players.Get(m[props.Get("index").Value]); 
      sPlayer.Spawns.Enable = false; 
      sPlayer.Spawns.Despawn(); 
      player.Ui.Hint.Value = "Игрок " +  sPlayer.nickName + " забанен"; 
 
 } 
}); 
 
var baTrigger = AreaPlayerTriggerService.Get("разбан"); 
baTrigger.Tags = ["разбан"]; 
baTrigger.Enable = true; 
baTrigger.OnEnter.Add(function(player) { 
  var j = Players.GetEnumerator(); 
  var prop = player.Properties; 
  if (prop.Get("admin").Value != 2) { 
    player.Ui.Hint.Value = "Недостаточно прав!"; 
  } 
  else { 
    var m = []; 
    while(j.moveNext()) { 
      m.push(j.Current.id); 
    } 
    var sPlayer = Players.Get(m[props.Get("index").Value]); 
      sPlayer.Spawns.Enable = true; 
      sPlayer.Spawns.Spawn(); 
      player.Ui.Hint.Value = "Игрок " +  sPlayer.nickName + " разбанен"; 
 } 
});
var ljjTrigger = AreaPlayerTriggerService.Get("ящик");
ljjTrigger.Tags = ["ящик"];
ljjTrigger.Enable = true;

ljjTrigger.OnEnter.Add(function(player) {
var c = player.Properties.Get("Crate");
if (c.Value){
player.Ui.Hint.Value = "ты не можешь нести более одного мешка!";
}else{player.Ui.Hint.Value = "ты взял мешок!";
c.Value++;
}
});
var lTrigger = AreaPlayerTriggerService.Get("обмен");
lTrigger.Tags = ["обмен"];
lTrigger.Enable = true;
lTrigger.OnEnter.Add(function(player) {
var c = player.Properties.Get("Crate");
if (c.Value){
player.Ui.Hint.Value = "ты продал мешок и получил 1000 Euro!";
c.Value = 0;
player.Properties.Deaths.Value += 1000; 
}else{player.Ui.Hint.Value = "у тебя нету мешка!";
}
});

Players.OnPlayerDisconnected.Add(function(player) {
  saveprops(player);
  if (player.Properties.Get("inArea").Value) {
    player.team.Properties.Get("plrs").Value--;
  }
});
Teams.OnPlayerChangeTeam.Add(function(player)
{
  var prop = player.Properties;
  if (prop.Get("registred").Value) {
    player.Spawns.Spawn();
  }
});
