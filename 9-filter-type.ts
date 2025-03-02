//implement a (generic) map function using reduce

export interface AppliedFilters {
    //sliders
    deviceRange: [number, number]; 
    indirectRange: [number, number];
    //inputs
    payeeCount: number;
    totalAmount: number;
    userCount: number;
    //dropdowns
    brands: string[];
    platform: string[];
    userType: string[];
    riskLevels: string[];
    userAgent: string[];
    //checkboxes
    showHidden: boolean;
    showDeleted: boolean;
    showActive: boolean;
}

// Bad ❌
const dropdownsProps: Array<keyof AppliedFilters> = ['brands', 'platform', 'userType', 'riskLevels', 'userAgent'];
const booleanProps: Array<keyof AppliedFilters> = ['showHidden', 'showDeleted', 'showActive'];

// Good ✅
// const filterName: KeysWithValsOfType<AppliedFilters,string[]> = ['brands','platform','userType','riskLevels','userAgent',];    




export type KeysWithValsOfType<T, V> = keyof { [P in keyof T as T[P] extends V ? P : never]: P };
