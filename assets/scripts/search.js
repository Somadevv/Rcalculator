$(document).ready(function () {
    var data = [
      {
        name: "Rain",
        cost: 40000,
        image: "assets/images/elements/rain.png",
      },
      {
        name: "Sea",
        cost: 40000,
        image: "assets/images/elements/sea.png",
      },
      {
        name: "Mud",
        cost: 40000,
        image: "assets/images/elements/mud.png",
      },
      {
        name: "Dust",
        cost: 40000,
        image: "assets/images/elements/dust.png",
      },
      {
        name: "Pressure",
        cost: 40000,
        image: "assets/images/elements/pressure.png",
      },
      {
        name: "Lava",
        cost: 40000,
        image: "assets/images/elements/lava.png",
      },
      {
        name: "Energy",
        cost: 40000,
        image: "assets/images/elements/energy.png",
      },
      {
        name: "Steam",
        cost: 40000,
        image: "assets/images/elements/steam.png",
      },
      {
        name: "Wind",
        cost: 130000,
        image: "assets/images/elements/wind.png",
      },
      {
        name: "Flood",
        cost: 160000,
        image: "assets/images/elements/flood.png",
      },
      {
        name: "Plant",
        cost: 160000,
        image: "assets/images/elements/plant.png",
      },
      {
        name: "Ocean",
        cost: 160000,
        image: "assets/images/elements/ocean.png",
      },
      {
        name: "Brick",
        cost: 100000,
        image: "assets/images/elements/brick.png",
      },
      {
        name: "Gunpowder",
        cost: 130000,
        image: "assets/images/elements/gunpowder.png",
      },
      {
        name: "Atmosphere",
        cost: 130000,
        image: "assets/images/elements/atmosphere.png",
      },
      {
        name: "Obsidian",
        cost: 130000,
        image: "assets/images/elements/obsidian.png",
      },
      {
        name: "Stone",
        cost: 100000,
        image: "assets/images/elements/stone.png",
      },
      {
        name: "Earthquake",
        cost: 100000,
        image: "assets/images/elements/earthquake.png",
      },
      {
        name: "Cloud",
        cost: 310000,
        image: "assets/images/elements/cloud.png",
      },
      {
        name: "Geyser",
        cost: 190000,
        image: "assets/images/elements/geyser.png",
      },
      {
        name: "Wave",
        cost: 400000,
        image: "assets/images/elements/wave.png",
      },
      {
        name: "Hurricane",
        cost: 520000,
        image: "assets/images/elements/hurricane.png",
      },
      {
        name: "Volcano",
        cost: 490000,
        image: "assets/images/elements/volcano.png",
      },
      {
        name: "Tobacco",
        cost: 340000,
        image: "assets/images/elements/tobacco.png",
      },
      {
        name: "Swamp",
        cost: 250000,
        image: "assets/images/elements/swamp.png",
      },
      {
        name: "Moss",
        cost: 280000,
        image: "assets/images/elements/moss.png",
      },
      {
        name: "Grass",
        cost: 250000,
        image: "assets/images/elements/grass.png",
      },
      {
        name: "Coal",
        cost: 280000,
        image: "assets/images/elements/coal.png",
      },
      {
        name: "Wall",
        cost: 340000,
        image: "assets/images/elements/wall.png",
      },
      {
        name: "Explosion",
        cost: 310000,
        image: "assets/images/elements/explosion.png",
      },
      {
        name: "Ash",
        cost: 610000,
        image: "assets/images/elements/ash.png",
      },
      {
        name: "Metal",
        cost: 670000,
        image: "assets/images/elements/metal.png",
      },
      {
        name: "Sand",
        cost: 460000,
        image: "assets/images/elements/sand.png",
      },
      {
        name: "Mountain",
        cost: 640000,
        image: "assets/images/elements/mountain.png",
      },
      {
        name: "Storm",
        cost: 730000,
        image: "assets/images/elements/storm.png",
      },
      {
        name: "Fog",
        cost: 370000,
        image: "assets/images/elements/fog.png",
      },
      {
        name: "Sky",
        cost: 580000,
        image: "assets/images/elements/sky.png",
      },
      {
        name: "Sound",
        cost: 820000,
        image: "assets/images/elements/sound.png",
      },
      {
        name: "Isle",
        cost: 670000,
        image: "assets/images/elements/isle.png",
      },
      {
        name: "Diamond",
        cost: 400000,
        image: "assets/images/elements/diamond.png",
      },
      {
        name: "Archipelago",
        cost: 2050000,
        image: "assets/images/elements/archipelago.png",
      },
      {
        name: "Fireworks",
        cost: 1840000,
        image: "assets/images/elements/fireworks.png",
      },
      {
        name: "Grenade",
        cost: 1240000,
        image: "assets/images/elements/grenade.png",
      },
      {
        name: "Steel",
        cost: 970000,
        image: "assets/images/elements/steel.png",
      },
      {
        name: "Ring",
        cost: 1870000,
        image: "assets/images/elements/ring.png",
      },
      {
        name: "Bullet",
        cost: 1600000,
        image: "assets/images/elements/bullet.png",
      },
      {
        name: "Blade",
        cost: 1120000,
        image: "assets/images/elements/blade.png",
      },
      {
        name: "Electricity",
        cost: 1420000,
        image: "assets/images/elements/electricity.png",
      },
      {
        name: "River",
        cost: 1030000,
        image: "assets/images/elements/river.png",
      },
      {
        name: "Glass",
        cost: 490000,
        image: "assets/images/elements/glass.png",
      },
      {
        name: "Boiler",
        cost: 760000,
        image: "assets/images/elements/boiler.png",
      },
      {
        name: "Rust",
        cost: 700000,
        image: "assets/images/elements/rust.png",
      },
      {
        name: "Sun",
        cost: 610000,
        image: "assets/images/elements/sun.png",
      },
      {
        name: "Cactus",
        cost: 1360000,
        image: "assets/images/elements/cactus.png",
      },
      {
        name: "Dew",
        cost: 640000,
        image: "assets/images/elements/dew.png",
      },
      {
        name: "Life",
        cost: 280000,
        image: "assets/images/elements/life.png",
      },
      {
        name: "Horizon",
        cost: 1540000,
        image: "assets/images/elements/horizon.png",
      },
      {
        name: "Desert",
        cost: 2560000,
        image: "assets/images/elements/desert.png",
      },
      {
        name: "Beach",
        cost: 1390000,
        image: "assets/images/elements/beach.png",
      },
      {
        name: "Alcohol",
        cost: 190000,
        image: "assets/images/elements/alcohol.png",
      },
      {
        name: "Compass",
        cost: 2320000,
        image: "assets/images/elements/compass.png",
      },
      {
        name: "Sand clock",
        cost: 2080000,
        image: "assets/images/elements/sand_clock.png",
      },
      {
        name: "Time",
        cost: 4720000,
        image: "assets/images/elements/time.png",
      },
      {
        name: "Clay",
        cost: 640000,
        image: "assets/images/elements/clay.png",
      },
      {
        name: "Tree",
        cost: 790000,
        image: "assets/images/elements/tree.png",
      },
      {
        name: "Knife",
        cost: 3820000,
        image: "assets/images/elements/knife.png",
      },
      {
        name: "Vottle",
        cost: 550000,
        image: "assets/images/elements/bottle.png",
      },
      {
        name: "Heat",
        cost: 40000,
        image: "assets/images/elements/heat.png",
      },
      {
        name: "Wheat",
        cost: 820000,
        image: "assets/images/elements/wheat.png",
      },
      {
        name: "Tinplate",
        cost: 790000,
        image: "assets/images/elements/tinplate.png",
      },
      {
        name: "Bulb",
        cost: 3250000,
        image: "assets/images/elements/bulb.png",
      },
      {
        name: "Carrot",
        cost: 220000,
        image: "assets/images/elements/carrot.png",
      },
      {
        name: "Cabbage",
        cost: 190000,
        image: "assets/images/elements/cabbage.png",
      },
      {
        name: "Cannabis",
        cost: 1390000,
        image: "assets/images/elements/cannabis.png",
      },
      {
        name: "Garbage",
        cost: 40000,
        image: "assets/images/elements/garbage.png",
      },
      {
        name: "Pot",
        cost: 1660000,
        image: "assets/images/elements/pot.png",
      },
      {
        name: "Gun",
        cost: 4480000,
        image: "assets/images/elements/gun.png",
      },
      {
        name: "Radiation",
        cost: 2440000,
        image: "assets/images/elements/radiation.png",
      },
      {
        name: "Atomic bomb",
        cost: 3370000,
        image: "assets/images/elements/atomic_bomb.png",
      },
      {
        name: "Dark glass",
        cost: 280000,
        image: "assets/images/elements/dark_glass.png",
      },
      {
        name: "Glasses",
        cost: 1900000,
        image: "assets/images/elements/glasses.png",
      },
      {
        name: "Flour",
        cost: 2500000,
        image: "assets/images/elements/flour.png",
      },
      {
        name: "Bread",
        cost: 4210000,
        image: "assets/images/elements/bread.png",
      },
      {
        name: "Tsunami",
        cost: 1060000,
        image: "assets/images/elements/tsunami.png",
      },
      {
        name: "Time",
        cost: 4720000,
        image: "assets/images/elements/time.png",
      },
      {
        name: "Paint",
        cost: 2800000,
        image: "assets/images/elements/paint.png",
      },
      {
        name: "Paper",
        cost: 370000,
        image: "assets/images/elements/paper.png",
      },
      {
        name: "Rainbow",
        cost: 2770000,
        image: "assets/images/elements/rainbow.png",
      },
      {
        name: "Oxygen",
        cost: 2770000,
        image: "assets/images/elements/oxygen.png",
      },
      {
      name: "Alarm",
      cost: 7180000,
      image: "assets/images/elements/alarm.png",
    },
    {
      name: "Virus",
      cost: 730000,
      image: "assets/images/elements/virus.png",
    },
    {
      name: "Black Matter",
      cost: 1000000,
      image: "assets/images/elements/black_matter.png",
    },
    {
      name: "Black Hole",
      cost: 3160000,
      image: "assets/images/elements/black_hole.png",
    },
    {
      name: "Plasma",
      cost: 370000,
      image: "assets/images/elements/plasma.png",
    },
    {
      name: "Chain",
      cost: 1030000,
      image: "assets/images/elements/chain.png",
    },
    {
      name: "Shit",
      cost: 5410000,
      image: "assets/images/elements/shit.png",
    },
    {
      name: "Gold",
      cost: 21640000,
      image: "assets/images/elements/gold.png",
    },
    {
      name: "Lens",
      cost: 1030000,
      image: "assets/images/elements/lens.png",
    },
    {
      name: "Microscope",
      cost: 2860000,
      image: "assets/images/elements/microscope.png",
    },
    {
      name: "Prism",
      cost: 4900000,
      image: "assets/images/elements/prism.png",
    },
    {
      name: "Smoke",
      cost: 380000,
      image: "assets/images/elements/smoke.png",
    },
    {
      name: "Pipe",
      cost: 5290000,
      image: "assets/images/elements/pipe.png",
    },
    {
      name: "Reed Pipe",
      cost: 5560000,
      image: "assets/images/elements/reed_pipe.png",
    },
    {
      name: "Music",
      cost: 12760000,
      image: "assets/images/elements/music.png",
    },
    {
      name: "Money",
      cost: 436900000,
      image: "assets/images/elements/money.png",
    },
    {
      name: "Blockchain",
      cost: 3131000,
      image: "assets/images/elements/blockchain.png",
    },
    {
      name: "Block",
      cost: 760000,
      image: "assets/images/elements/block.png",
    },
    {
      name: "Broom",
      cost: 4930000,
      image: "assets/images/elements/broom.png",
    },
  
    ];
  
    $("#txt-search").keyup(function () {
      elementTitle.classList.add('hidden');
      var searchField = $(this).val();
      if (searchField === "") {
        $("#filter-records").html("");
        return;
      }
      prices.wax = formatNumbers(prices.wax, 2);
      prices.aether = formatNumbers(prices.aether, 3);
      var regex = new RegExp(searchField, "i");
      var output = '<div class="elem-flex">';
      var count = 1;
      $.each(data, function (key, val) {
        if (val.name.search(regex) != -1) {
          let usdtResult = val.cost * prices.aether * prices.wax;
          usdtResult = formatNumbers(usdtResult, 2);
          output += `
          <div class="well">
              <div class="element-title"><h5>
              ${val.name}</h5>
                  <img class="element-image" src="${val.image}" alt="${val.name}" />
              </div>
              <div class="">
                  <img class="searched-price-image" src="assets/images/aether.png" alt="Card image cap"> <p class=" inline-block">${val.cost}</p></br>
                  <img class="searched-price-image" src="assets/images/wax.png" alt="Card image cap">
                  <p class="inline-block">${val.cost * prices.aether}</p>
                  <img class="searched-price-image inline-block" src="assets/images/usdt.png" alt="Card image cap">
                  <p class="inline-block">${usdtResult}</p>
              </div>
          </div>`
        }
      });
      output += `<div class="placeholder-card"></div>
                  <div class="placeholder-card" ></div>
                  <div class="placeholder-card" ></div>`
  
      output += "</div> </div> </div>";
      $("#filter-records").html(output);
    });
  });
  // prices.wax = formatNumbers(prices.usdt, 4);
  // prices.aether = formatNumbers(prices.wax, 3);
  // prices.usdt = formatNumbers(prices.aether, 5);