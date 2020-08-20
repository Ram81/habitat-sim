// Copyright (c) Facebook, Inc. and its affiliates.
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

//import { getEmptySlot, getObjectSlot } from "./utils";

/**
 * Inventory class
 */
class Inventory {
  // PUBLIC methods.

  /**
   * Create navigate task.
   * @param {number} inventorySlots - inventory size
   */
  constructor(inventorySlots) {
    this.inventorySlots = inventorySlots;
    this.inventory = new Array(inventorySlots);
    this.inventoryEnabled = false;
    this.inventoryCtx = null;
  }

  reset() {
    this.inventory = new Array(this.inventorySlots);
  }

  initInventory(context) {
    this.inventoryEnabled = true;
    this.inventoryCtx = context;
  }

  setSlot(index, value) {
    this.inventory[index] = value;
  }

  getSlot(index) {
    return this.inventory[index];
  }

  getEmptySlot() {
    for (let index = 0; index < this.inventorySlots; index++) {
      if (this.inventory[index] === undefined) {
        return index;
      }
    }
    return -1;
  }

  findObjectSlot(objectId) {
    for (let index = 0; index < this.inventorySlots; index++) {
      if (this.inventory[index]["objectId"] === objectId) {
        return index;
      }
    }
    return -1;
  }

  renderInventory() {
    if (!this.inventoryEnabled) {
      return;
    }

    const height = 80;
    const padding = 5;
    const width = height * this.inventorySlots;
    let ctx = this.inventoryCtx;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "darkslategray";
    const boxSize = height - padding * 2;
    for (let i = 0; i < this.inventorySlots; ++i) {
      // draw box
      const boxOffset = padding + i * (boxSize + padding);
      ctx.beginPath();
      ctx.rect(boxOffset, padding, boxSize, boxSize);
      ctx.stroke();

      const imgSize = boxSize - padding * 2;
      if (this.inventory[i] !== undefined) {
        let img = new Image();
        img.src = this.inventory[i]["objectIcon"];
        img.addEventListener("load", () => {
          ctx.drawImage(
            img,
            boxOffset + padding,
            padding * 2,
            imgSize,
            imgSize
          );
        });
      }
    }
  }
}

export default Inventory;
