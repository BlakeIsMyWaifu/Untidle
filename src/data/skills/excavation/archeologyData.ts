interface ArcheologyData {
    name: string;
    image: string;
    xp: number;
    intervalTime: number;
    unlockLevel: number;
}

export const archeologyData: Record<string, ArcheologyData> = {}