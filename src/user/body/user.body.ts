import { IsEmail, IsEnum, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";
import { UserRoleType } from "../enums/user-role.enum";

export class UserSignInBody {

    @IsEmail({}, { message: 'Email is not valide' })
    email: string;

    @IsNotEmpty({ message: 'Password is required' })
    @IsString()
    password: string;

    constructor(
        email: string,
        password: string
    ) {
        this.email = email
        this.password = password
    }

}

export class UserSignUpBody extends UserSignInBody {

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @MinLength(10, { message: 'Password must be at least 10 characters long' })
    @Matches(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    @Matches(/[\W_]/, { message: 'Password must contain at least one special character' })
    override password: string;

    @IsEnum(UserRoleType)
    role: UserRoleType;

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        role: UserRoleType
    ) {
        super(email, password)
        this.firstName = firstName
        this.lastName = lastName
        this.password = password
        this.role = role
    }

}