export default class Components{
    history = [];

    constructor(str) {
        this.str = str;
    }

    setHistory(args, func, result){
        this.history.push({
            function: func,
            args: (Array.isArray(args)? args.join(',') : args),
            result: result
        });
    }

    get history(){
        return this.history;
    }

    reverseStr(){
        const result = [...this.str].reverse().join('');
        this.setHistory(this.str, this.reverseStr.name, result);
        return result;
    }

    nTimes(times){
        let newStr = this.str.repeat(+times)
        this.setHistory([this.str, times], this.nTimes.name, newStr)
        return newStr;
    }

    getPart(){
        let halfOfStr = Math.round(this.str.length / 2);

        let result = this.str.substr(halfOfStr);
        this.setHistory(this.str, this.nTimes.name, result);
        return result;
    }

    removeDuplicates(){
        let result = this.str.replace(/(.)(?=.*\1)/g, '');
        this.setHistory(this.str, this.nTimes.name, result)
        return result;
    }
}