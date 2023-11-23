export default class UtilsTempoProgress {
    static setUp() {
        const tempoList = JSON.parse(localStorage.getItem('tempolist') || null as any);
        if (!tempoList || tempoList.length === 0) {
            const objects = [
                {
                    id: 0,
                    finished: false,
                },
                {
                    id: 1,
                    finished: false,
                },
                {
                    id: 2,
                    finished: false,
                },
                {
                    id: 3,
                    finished: false,
                },
            ]
            localStorage.setItem('tempolist', JSON.stringify(objects));
        }
    }
    static setFinish(id: number) {
        const tempoList = JSON.parse(localStorage.getItem('tempolist') || null as any);
        if (!tempoList || tempoList.length === 0) return;
        const item = (tempoList as any).find((t:any) => t.id === id);
        item.finished = true;
        localStorage.setItem('tempolist', JSON.stringify(tempoList));
    }
    static getList() {
        const tempoList = JSON.parse(localStorage.getItem('tempolist') || null as any);
        if (!tempoList || tempoList.length === 0) return [];
        return tempoList;
    }
}