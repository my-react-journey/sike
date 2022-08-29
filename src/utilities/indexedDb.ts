import { del, get, set, update } from 'idb-keyval'


export async function setStorage(key: string, value: any): Promise<any> {
    return await set(key, value)
}

export async function getStorage(key: string): Promise<any> {
    return await get(key)
}

export async function updateStorage(key: string, value: any): Promise<any> {
    return await update(key, value)
}

export async function deleteStorage(key: string): Promise<any> {
    return await del(key)
}