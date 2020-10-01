export class Member {
    constructor(
        public MemberID: string,
        public EmployeeID: string,
        public WarehouseID: string,
        public FirstName: string,
        public LastName: string,
        public Email: string,
        public ProfileImagePath: string,
        public IsActive: string,

        public MemberRoles: MemberGadgetRole[]
    ) {}
}

export class MemberGadgetRole {
    constructor(
        public MemberGadgetRoleID: string,
        public MemberID: string,
        public GadgetRoleID: string,
        public GadgetRoleName: string,
        public IsLead: boolean,
    ) {}
}

export class GadgetRole {
    constructor(
        public GadgetRoleID: string,
        public Name: string,
        public IsLead: boolean,
    ) {}
}
