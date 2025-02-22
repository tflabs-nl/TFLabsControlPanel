export class RackspaceHelper {

    static groupRackSpaces(rackSpaces: number[]): string[] {
        if (rackSpaces.length === 0) return [];

        rackSpaces.sort((a, b) => a - b);

        const result: string[] = [];
        let start = rackSpaces[0];
        let end = start;

        for (let i = 1; i < rackSpaces.length; i++) {
            if (rackSpaces[i] === end + 1) {
                end = rackSpaces[i];
            } else {
                result.push(start === end ? `U${start}` : `U${start}-U${end}`);
                start = rackSpaces[i];
                end = start;
            }
        }

        result.push(start === end ? `U${start}` : `U${start}-U${end}`);
        return result;
    }

}