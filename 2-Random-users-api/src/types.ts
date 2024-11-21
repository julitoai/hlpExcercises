// ejemplo 
export interface Farmer {
  name: string
  tools: FarmerTool[]
  age: number
  location?: string
}

export type FarmerTool = 'sickle' | 'scythe' | 'hoe' | 'pickaxe' | 'shovel' | 'axe' | 'hammer' | 'crossbow' | 'bow' | 'arrow' | 'spear' | 'sword' | 'mace' | 'club' | 'dagger' | 'knife' | 'polearm' | 'staff' | 'wand' | 'rod' | 'shield' | 'helmet' | 'cloak' | 'tunic' | 'cuirass' | 'legs' | 'boots' | 'gloves' | 'ring' | 'amulet' | 'belt' | 'suit' | 'armor' | 'clothing' | 'food' | 'potion' | 'scroll' | 'spell' | 'tool' | 'weapon' | 'other'