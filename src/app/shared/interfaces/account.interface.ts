export interface Account {
    _id: string;
    email: string;
    company_ids: string[];
    is_approved: Boolean;
    multiCompany: Boolean;
    multi_company: Boolean;
    name: string;
    profile_url: string;
    role_id: string;
    social_network_ref_ids: string[];
    createdAt: string;
    updatedAt: string;
}
