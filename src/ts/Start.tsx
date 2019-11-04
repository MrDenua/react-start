declare function f(a: object | null): void

// ====== function interface
interface SearchString {
    (source: string, subString: string): boolean
}

let search: SearchString;
search = function (source, substring): boolean {
    let result = source.search(substring);
    return result > -1;
};


// =====


export default f