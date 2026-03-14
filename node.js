const chestDirections = [[-159.5, -70.9],
[-69.5,-70.9],
[20.5,-70.9],
[110.5,-70.9],
[-46.0, -56.4],
[44.0, -56.4],
[134.0, -56.4],
[224.0, -56.4],
[163.9, -68.1],
[253.9,-68.1],
[343.9,-68.1],
[433.9,-68.1],
[-179.2, -64.4],
[-89.1,-64.4],
[0.8,-64.4],
[90.8,-64.4],
[147.3, -49.3],
[237.3,-49.3],
[327.3,-49.3],
[417.3,-49.3],
[163.5, -52.7],
[253.5,-52.7],
[343.5,-52.7],
[433.5,-52.7],
[-176.7, -54.0],
[-86.6,-54.0],
[3.3,-54.0],
[93.3,-54.0],
[-169.1, -52.0],
[-79.1,-52.0],
[10.9,-52.0],
[100.9,-52.0],
[-148.0, -49.5],
[-58.0,-49.5],
[32.0,-49.5],
[122.0,-49.5],
[135.4, -37.5],
[225.4,-37.5],
[315.4,-37.5],
[405.4,-37.5],
[155.9, -35.1],
[245.9,-35.1],
[335.9,-35.1],
[425.9,-35.1],
[168.4, -36.6],
[258.4,-36.6],
[348.4,-36.6],
[438.4,-36.6],
[179.6, -38.6],
[269.6,-38.6],
[359.6,-38.6],
[449.6,-38.6],
[-168.3, -38.4],
[-78.3,-38.4],
[11.6,-38.4],
[101.6,-38.4],
[-154.9, -37.8],
[-64.9,-37.8],
[25.0,-37.8],
[115.1,-37.8],
[143.7, -22.9],
[233.7,-22.9],
[323.7,-22.9],
[413.7,-22.9],
[155.1, -24.1],
[245.1,-24.1],
[335.1,-24.1],
[425.1,-24.1],
[171.3, -21.8],
[261.3,-21.8],
[351.3,-21.8],
[441.3,-21.8],
[-179.4, -22.2],
[-89.4,-22.2],
[0.5,-22.2],
[90.6,-22.2],
[-172.7, -21.8],
[-82.6,-21.8],
[7.3,-21.8],
[97.3,-21.8],
[-155.6, -24.7],
[-65.6,-24.7],
[24.4,-24.7],
[114.4,-24.7],
[-142.5, -23.3],
[-52.5,-23.3],
[37.5,-23.3],
[127.5,-23.3],
[135.0, -7.7],
[225.0,-7.7],
[315.0,-7.7],
[405.0,-7.7],
[143.3, -9.9],
[233.3,-9.9],
[323.3,-9.9],
[413.3,-9.9],
[159.8, -9.7],
[249.8,-9.7],
[339.8,-9.7],
[429.8,-9.7],
[173.2, -9.6],
[263.2,-9.6],
[353.2,-9.6],
[443.2,-9.6],
[-178.9, -10.4],
[-88.9,-10.4],
[1.0,-10.4],
[91.1,-10.4],
[-171.8, -10.2],
[-81.8,-10.2],
[8.1,-10.2],
[98.1,-10.2],
[-160.1, -9.8],
[-70.1,-9.8],
[19.9,-9.8],
[109.9,-9.8],
[-144.6, -10.6],
[-54.6,-10.6],
[35.4,-10.6],
[125.4,-10.6],
[135.0, -0.0],
[225.0,-0.0],
[315.0,-0.0],
[405.0,-0.0],
[144.0, -0.0],
[234.0,-0.0],
[324.0,-0.0],
[414.0,-0.0],
[160.5, -0.0],
[250.5,-0.0],
[340.5,-0.0],
[430.5,-0.0],
[171.1, -0.0],
[261.1,-0.0],
[351.1,-0.0],
[441.1,-0.0],
[179.5, -0.0],
[269.5,-0.0],
[359.5,-0.0],
[449.5,-0.0],
[-171.3, -0.0],
[-81.3,-0.0],
[8.6,-0.0],
[98.6,-0.0],
[-159.7, -0.0],
[-69.6,-0.0],
[20.3,-0.0],
[110.3,-0.0],
[-144.0, -0.0],
[-54.0,-0.0],
[36.0,-0.0],
[126.0,-0.0],
[134.8, 6.0],
[224.8,6.0],
[314.8,6.0],
[404.8,6.0],
[144.0, 7.2],
[234.0,7.2],
[324.0,7.2],
[414.0,7.2],
[160.0, 6.9],
[250.0,6.9],
[340.0,6.9],
[430.0,6.9],
[172.4, 5.6],
[262.4,5.6],
[352.4,5.6],
[442.4,5.6],
[179.6, 6.7],
[269.6,6.7],
[359.6,6.7],
[449.6,6.7],
[-171.2, 5.9],
[-81.1,5.9],
[8.8,5.9],
[98.8,5.9],
[-161.2, 5.5],
[-71.1,5.5],
[18.8,5.5],
[108.8,5.5],
[-145.2, 6.2],
[-55.1,6.2],
[34.8,6.2],
[124.8,6.2],
[143.9, 17.6],
[233.9,17.6],
[323.9,17.6],
[413.9,17.6],
[154.7, 17.5],
[244.7,17.5],
[334.7,17.5],
[424.7,17.5],
[169.7, 17.6],
[259.7,17.6],
[349.7,17.6],
[439.7,17.6],
[-179.5, 17.2],
[-89.5,17.2],
[0.5,17.2],
[90.5,17.2],
[-168.4, 17.9],
[-78.4,17.9],
[11.5,17.9],
[101.6,17.9],
[-155.7, 18.2],
[-65.6,18.2],
[24.3,18.2],
[114.3,18.2],
[-142.8, 17.8],
[-52.8,17.8],
[37.1,17.8],
[127.2,17.8],
[155.1, 31.9],
[245.1,31.9],
[335.1,31.9],
[425.1,31.9],
[168.7, 32.1],
[258.7,32.1],
[348.7,32.1],
[438.7,32.1],
[178.0, 33.4],
[268.0,33.4],
[358.0,33.4],
[448.0,33.4],
[-167.6, 34.2],
[-77.6,34.2],
[12.4,34.2],
[102.4,34.2],
[-154.6, 31.8],
[-64.6,31.8],
[25.4,31.8],
[115.4,31.8],
[-139.7, 31.5],
[-49.6,31.5],
[40.3,31.5],
[130.3,31.5],
[148.4, 46.9],
[238.4,46.9],
[328.4,46.9],
[418.4,46.9],
[163.4, 49.4],
[253.4,49.4],
[343.4,49.4],
[433.4,49.4],
[179.0, 50.8],
[269.0,50.8],
[359.0,50.8],
[449.0,50.8],
[-166.1, 51.2],
[-76.1,51.2],
[13.9,51.2],
[103.9,51.2],
[-149.9, 47.1],
[-59.9,47.1],
[30.0,47.1],
[120.1,47.1],
[162.4, 62.3],
[252.4,62.3],
[342.4,62.3],
[432.4,62.3],
[179.6, 63.9],
[269.6,63.9],
[359.6,63.9],
[449.6,63.9],
[-161.7, 62.8],
[-71.6,62.8],
[18.3,62.8],
[108.3,62.8],
[-137.3, 61.7],
[-47.3,61.7],
[42.6,61.7],
[132.7,61.7],
[144.7, 71.8],
[234.7,71.8],
[324.7,71.8],
[414.7,71.8],
[175.9, 76.0],
[265.9,76.0],
[355.9,76.0],
[445.9,76.0]];

const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'localhost',
  port: 65535,
  username: 'StorageBot',
  auth: 'offline'
});

const PASSTHROUGH_BLOCKS = new Set([
  'air', 'cave_air', 'void_air',
  'iron_bars', 'copper_bars', 'exposed_copper_bars', 'oxidized_copper_bars', 'waxed_copper_bars',
  'waxed_exposed_copper_bars', 'waxed_oxidized_copper_bars', 'waxed_weathered_copper_bars', 'weathered_copper_bars',
  'glass_pane',
]);

// null = never opened, [] = known empty
let chestContents = Array.from({ length: chestDirections.length }, () => null);

let barrelPos = null;
let active    = false;
let firstOpen = true;

// -------------------------------------------------------
// BOT INITIALIZATION
// -------------------------------------------------------
bot.on('spawn', () => {
  bot.physics.reachDistance = 5;
  bot.physics.yawSpeed      = 1000;
  bot.physics.pitchSpeed    = 1000;
  console.log("Bot ready. Commands:");
  console.log("  sort                   — sort barrel into chests");
  console.log("  <item_name> <amount>   — retrieve items");
  console.log("  scan                   — scan all chests into memory");
  console.log("  break                  — break all reachable blocks");
  console.log("  test                   — test pitch accuracy");
});

const LOOK_SETTLE = 50;
const INV_SYNC    = 50;

// -------------------------------------------------------
// RAYCAST
// -------------------------------------------------------
function manualRaycast(yawRad, pitchRad, maxDistance = 5, excludePos = null) {
  const pos = bot.entity.position.offset(0, 1.62, 0);
  const dx  = -Math.sin(yawRad) * Math.cos(pitchRad);
  const dy  =  Math.sin(pitchRad);
  const dz  = -Math.cos(yawRad) * Math.cos(pitchRad);
  const absPitch = Math.abs(pitchRad);
  const stepSize = absPitch > (70 * Math.PI / 180) ? 0.02 : 0.1;

  let lastKey = null;
  for (let dist = stepSize; dist <= maxDistance; dist += stepSize) {
    const checkPos = pos.offset(dx * dist, dy * dist, dz * dist);
    const bx = Math.floor(checkPos.x);
    const by = Math.floor(checkPos.y);
    const bz = Math.floor(checkPos.z);
    const key = `${bx},${by},${bz}`;
    if (key === lastKey) continue;
    lastKey = key;

    if (excludePos && bx === excludePos.x && by === excludePos.y && bz === excludePos.z) continue;

    const block = bot.blockAt(checkPos);
    if (block && !PASSTHROUGH_BLOCKS.has(block.name)) return block;
  }
  return null;
}

async function lookAndGetBlock(yawDeg, pitchDeg, maxDistance = 5, excludePos = null) {
  const yawRad   = -(yawDeg   * Math.PI / 180);
  const pitchRad =  (pitchDeg * Math.PI / 180);
  bot.entity.yaw   = yawRad;
  bot.entity.pitch = pitchRad;
  await new Promise(r => setTimeout(r, LOOK_SETTLE));
  return manualRaycast(bot.entity.yaw, bot.entity.pitch, maxDistance, excludePos);
}

// -------------------------------------------------------
// OPEN CHEST
// -------------------------------------------------------
async function openChestAtIndex(index) {
  const [yaw, pitch] = chestDirections[index];
  const block = await lookAndGetBlock(yaw, pitch, 5, barrelPos);
  if (!block) return null;

  if (firstOpen) {
    await new Promise(r => setTimeout(r, 500));
    firstOpen = false;
  }

  let chest;
  try {
    chest = await bot.openContainer(block);
  } catch (err) {
    console.log(`Could not open container at Index ${index}: ${err.message}`);
    return null;
  }

  const slots = chest.containerItems();
  chestContents[index] = slots.map(s => ({ name: s.name, count: s.count }));
  chest._block = block;
  return chest;
}

// -------------------------------------------------------
// SORT
// -------------------------------------------------------
async function processInput() {
  firstOpen = true;

  // Open barrel and verify bot inventory is empty
  const barrelBlock = await lookAndGetBlock(0, 88.9, 6);
  if (!barrelBlock) { bot.chat("Error: No barrel found above me."); return; }

  console.log(`Found barrel: ${barrelBlock.name} at ${barrelBlock.position}`);
  barrelPos = barrelBlock.position.floored();

  let barrel;
  try {
    barrel = await bot.openContainer(barrelBlock);
  } catch (err) {
    bot.chat(`Error opening barrel: ${err.message}`);
    return;
  }

  const barrelItems = barrel.containerItems();
  if (barrelItems.length === 0) {
    await barrel.close();
    bot.chat("Barrel is empty.");
    return;
  }

  const existingInv = bot.inventory.items();
  if (existingInv.length > 0) {
    await barrel.close();
    bot.chat(`Error: My inventory is not empty (${existingInv.length} stacks). Aborting.`);
    return;
  }

  // Withdraw every stack from the barrel at once
  for (const item of barrelItems) {
    try {
      await barrel.withdraw(item.type, null, item.count);
      await new Promise(r => setTimeout(r, INV_SYNC));
    } catch (err) {
      console.log(`Failed to withdraw ${item.name}: ${err.message}`);
    }
  }
  await barrel.close();

  // Group inventory by item type
  const invSnapshot = groupInventory();
  if (invSnapshot.length === 0) {
    bot.chat("Nothing withdrawn from barrel.");
    return;
  }

  bot.chat(`Sorting ${invSnapshot.length} item type(s)...`);

  for (const { type, name, total } of invSnapshot) {
    let remaining = total;
    console.log(`Depositing ${total}x ${name}...`);

    // --- Pass 1: stack into chests that already have a partial stack of this item ---
    // Collect all candidate indices from RAM first, then visit them
    const partialIndices = [];
    for (let i = 0; i < chestContents.length; i++) {
      if (chestContents[i] === null) continue;
      if (chestContents[i].find(s => s.name === name && s.count < 64)) partialIndices.push(i);
    }

    for (const index of partialIndices) {
      if (remaining <= 0) break;
      // Re-check RAM in case a previous deposit in this loop already filled it
      if (!chestContents[index] || !chestContents[index].find(s => s.name === name && s.count < 64)) continue;

      const chest = await openChestAtIndex(index);
      if (!chest) continue;

      if (!chest.containerItems().find(s => s.name === name && s.count < 64)) {
        await chest.close();
        continue;
      }

      let depositedThisChest = 0;
      while (remaining > 0) {
        const invItem = bot.inventory.findInventoryItem(type, null);
        if (!invItem) break;
        try {
          await chest.deposit(type, null, invItem.count);
          await new Promise(r => setTimeout(r, INV_SYNC));
          remaining          -= invItem.count;
          depositedThisChest += invItem.count;
        } catch (err) {
          console.log(`Chest ${index} full after ${depositedThisChest} items: ${err.message}`);
          break;
        }
      }

      chestContents[index] = chest.containerItems().map(s => ({ name: s.name, count: s.count }));
      console.log(`[stack] Deposited ${depositedThisChest}x ${name} into chest ${index}. Remaining: ${remaining}`);
      await chest.close();
    }

    // --- Pass 2: deposit remainder into first chest with a free slot ---
    for (let index = 0; index < chestDirections.length && remaining > 0; index++) {
      if (chestContents[index] !== null && chestContents[index].length >= 27) continue;

      const chest = await openChestAtIndex(index);
      if (!chest) continue;

      if (chest.containerItems().length >= chest.inventoryStart) {
        await chest.close();
        continue;
      }

      let depositedThisChest = 0;
      while (remaining > 0) {
        const invItem = bot.inventory.findInventoryItem(type, null);
        if (!invItem) break;
        try {
          await chest.deposit(type, null, invItem.count);
          await new Promise(r => setTimeout(r, INV_SYNC));
          remaining          -= invItem.count;
          depositedThisChest += invItem.count;
        } catch (err) {
          console.log(`Chest ${index} full after ${depositedThisChest} items: ${err.message}`);
          break;
        }
      }

      chestContents[index] = chest.containerItems().map(s => ({ name: s.name, count: s.count }));
      console.log(`[free] Deposited ${depositedThisChest}x ${name} into chest ${index}. Remaining: ${remaining}`);
      await chest.close();
    }

    if (remaining > 0) bot.chat(`No space found for ${remaining}x ${name}!`);
  }

  bot.chat("Sort complete!");
}

// Groups all bot inventory stacks by item type, summing counts
function groupInventory() {
  const map = new Map();
  for (const item of bot.inventory.items()) {
    if (map.has(item.type)) {
      map.get(item.type).total += item.count;
    } else {
      map.set(item.type, { type: item.type, name: item.name, total: item.count });
    }
  }
  return Array.from(map.values());
}

// -------------------------------------------------------
// RETRIEVE
// -------------------------------------------------------
async function retrieveItems(itemName, amount) {
  firstOpen = true;
  let remaining = amount;
  bot.chat(`Retrieving ${amount}x ${itemName}...`);

  for (let index = chestDirections.length - 1; index >= 0; index--) {
    if (remaining <= 0) break;

    if (chestContents[index] !== null) {
      const memEntry = chestContents[index].find(s => s.name === itemName);
      if (!memEntry) continue;
    } else {
      continue; // unscanned — skip on retrieve
    }

    const chest = await openChestAtIndex(index);
    if (!chest) continue;

    const match = chestContents[index].find(s => s.name === itemName);
    if (!match) {
      await chest.close();
      continue;
    }

    const slots         = chest.containerItems();
    const matchingSlots = slots.filter(s => s.name === itemName);

    for (const slot of matchingSlots) {
      if (remaining <= 0) break;
      const toTake = Math.min(slot.count, remaining);
      try {
        await chest.withdraw(slot.type, null, toTake);
        remaining -= toTake;
        await new Promise(r => setTimeout(r, INV_SYNC));
      } catch (err) {
        console.log(`Withdraw error at index ${index}: ${err.message}`);
      }
    }

    chestContents[index] = chest.containerItems().map(s => ({ name: s.name, count: s.count }));
    await chest.close();
  }

  const retrieved = amount - remaining;
  if (retrieved === 0) {
    bot.chat(`Could not find any ${itemName} in storage.`);
    return;
  }

  const outputBlock = await lookAndGetBlock(0, 86.8, 6);
  if (!outputBlock) {
    bot.chat(`Retrieved ${retrieved}x ${itemName} but couldn't find output container!`);
    return;
  }

  const outputContainer = await bot.openContainer(outputBlock);
  const invItems        = bot.inventory.items().filter(i => i.name === itemName);
  for (const item of invItems) {
    try {
      await outputContainer.deposit(item.type, null, item.count);
      await new Promise(r => setTimeout(r, INV_SYNC));
    } catch (err) {
      console.log(`Failed to deposit ${item.name} to output: ${err.message}`);
    }
  }
  await outputContainer.close();

  if (remaining > 0) {
    bot.chat(`Only found ${retrieved}x ${itemName} (wanted ${amount}). Deposited what I had.`);
  } else {
    bot.chat(`Deposited ${retrieved}x ${itemName} into output container.`);
  }
}

// -------------------------------------------------------
// MEMORY HELPERS
// -------------------------------------------------------
function findTargetChest(item) {
  for (let i = 0; i < chestContents.length; i++) {
    if (chestContents[i] === null) continue;
    if (chestContents[i].find(s => s.name === item.name && s.count < 64)) return i;
  }
  for (let i = 0; i < chestContents.length; i++) {
    if (chestContents[i] === null) return i;
    if (chestContents[i].length < 27) return i;
  }
  return -1;
}

// -------------------------------------------------------
// CHAT / CONSOLE TRIGGERS
// -------------------------------------------------------
async function run(fn) {
  if (active) {
    bot.chat('Busy, please wait.');
    console.log('Busy, ignoring trigger.');
    return;
  }
  active = true;
  try {
    await fn();
  } catch (err) {
    console.log(`Unhandled error: ${err.message}`);
    bot.chat(`Error: ${err.message}`);
  } finally {
    active = false;
  }
}

function parseCommand(text) {
  console.log(`[message received] "${text}"`);
  const stripped = text.replace(/^<[^>]+>\s*/, '').replace(/^[^:]+:\s*/, '').trim();
  console.log(`[stripped] "${stripped}"`);

  if (stripped === 'sort')  return { cmd: 'sort' };
  if (stripped === 'scan')  return { cmd: 'scan' };
  if (stripped === 'break') return { cmd: 'break' };
  if (stripped === 'test')  return { cmd: 'test' };

  const match = stripped.match(/^([a-z_]+)\s+(\d+)$/);
  if (match) return { cmd: 'retrieve', itemName: match[1], amount: parseInt(match[2], 10) };

  return null;
}

bot.on('message', async (jsonMsg) => {
  const parsed = parseCommand(jsonMsg.toString().trim());
  if (!parsed) return;
  if (parsed.cmd === 'sort')     await run(processInput);
  if (parsed.cmd === 'scan')     await run(scanAllChests);
  if (parsed.cmd === 'break')    await run(breakSkipped);
  if (parsed.cmd === 'test')     await run(testPitch);
  if (parsed.cmd === 'retrieve') await run(() => retrieveItems(parsed.itemName, parsed.amount));
});

process.stdin.setEncoding('utf8');
process.stdin.on('data', async (input) => {
  const parsed = parseCommand(input.trim());
  if (!parsed) return;
  if (parsed.cmd === 'sort')     await run(processInput);
  if (parsed.cmd === 'scan')     await run(scanAllChests);
  if (parsed.cmd === 'break')    await run(breakSkipped);
  if (parsed.cmd === 'test')     await run(testPitch);
  if (parsed.cmd === 'retrieve') await run(() => retrieveItems(parsed.itemName, parsed.amount));
});

// -------------------------------------------------------
// SCAN
// -------------------------------------------------------
async function scanAllChests() {
  firstOpen = true;
  bot.chat(`Scanning ${chestDirections.length} chests into memory...`);
  let opened  = 0;
  let skipped = [];

  for (let i = 0; i < chestDirections.length; i++) {
    const chest = await openChestAtIndex(i);
    if (chest) {
      await chest.close();
      opened++;
    } else {
      const [yaw, pitch] = chestDirections[i];
      console.log(`Skipped index ${i} (yaw=${yaw}, pitch=${pitch})`);
      skipped.push(i);
    }
    if (i % 10 === 0) await new Promise(r => setTimeout(r, 50));
  }

  bot.chat(`Scan complete! ${opened}/${chestDirections.length} opened. ${skipped.length} skipped.`);
  if (skipped.length > 0) {
    bot.chat(`Skipped indices: ${skipped.join(', ')}`);
    console.log(`Skipped: ${skipped.join(', ')}`);
  }
  console.log('Scan complete.');
}

// -------------------------------------------------------
// BREAK
// -------------------------------------------------------
async function breakSkipped() {
  bot.chat('Breaking blocks at all directions that returned no block...');
  let broken = 0;
  for (let i = 0; i < chestDirections.length; i++) {
    const [yaw, pitch] = chestDirections[i];
    const block = await lookAndGetBlock(yaw, pitch, 5, barrelPos);
    if (!block) {
      console.log(`Index ${i}: nothing found at (yaw=${yaw}, pitch=${pitch})`);
      continue;
    }
    try {
      await bot.dig(block);
      bot.chat(`Broke index ${i}: ${block.name} at ${block.position}`);
      broken++;
    } catch (err) {
      bot.chat(`Failed to break index ${i}: ${err.message}`);
    }
    await new Promise(r => setTimeout(r, 100));
  }
  bot.chat(`Done. Broke ${broken} blocks.`);
}

// -------------------------------------------------------
// TEST
// -------------------------------------------------------
async function testPitch() {
  for (let pitch = -68.3; pitch <= -68.0; pitch += 0.05) {
    await bot.look(0, pitch * Math.PI / 180, true);
    await new Promise(r => setTimeout(r, 200));
    console.log(`Tried pitch ${pitch}° — entity.pitch = ${(bot.entity.pitch * 180 / Math.PI).toFixed(2)}°`);
  }
}
