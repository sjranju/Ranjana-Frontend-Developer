export enum Status { active = 'active', unknown = 'unknown', retired = 'retired' }

export type CapsuleData = {
    capsule_serial: string,
    capsule_id: string,
    status: Status,
    original_launch: string,
    original_launch_unix: number,
    missions: [
        {
            name: string,
            flight: number
        }
    ],
    landings: number,
    type: string,
    details: string,
    reuse_count: number
}