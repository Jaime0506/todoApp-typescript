import type { Todo } from "../types";

export const quickShort = (array: Todo[]): Todo[] => {
    if (array.length < 1) return [];
    // console.log(array)
    
    let left = [];
    let right = [];
    const pivot = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i].create_at > pivot.create_at) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    if (right.length > 0) right = quickShort(right);
    if (left.length > 0) left = quickShort(left);

    const result: Todo[] = []; //   result.concat(left, pivot,right)
    return result.concat(left, pivot, right);
};
