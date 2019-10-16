export interface Prediction {
    description: string;
    id: string;
    matched_substrings: [];
    place_id: string;
    reference: string;
    structured_formatting: string;
    terms: [];
    types: string[];
}