export interface Main {
    success: boolean;
    data:    Blog[];
}

export interface Blog {
    _id:       string;
    title:     string;
    caption:   string;
    slug:      string;
    createdAt: Date;
    updatedAt?: Date;
    image:     string;
    category:  string;
}
