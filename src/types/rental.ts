export type Rental = {
    id?: number;
    hourValue?: number | null;
    value?: number | null;
    pickupLocation?: string | null;
    pickupDate?: string | null;
    returnDate?: string | null;
    carId?: number | null;
    userId?: number | null;
    accepted?: boolean | null;
}