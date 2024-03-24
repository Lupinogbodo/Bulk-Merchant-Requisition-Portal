import { IsEmail, IsEnum, IsInt, IsNotEmpty} from 'class-validator';
import { FormStatus } from '../entities/form.enum';
import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn, Timestamp } from 'typeorm';
import { CardType } from '../entities/card.enum';
import { CategoryBusinessType } from '../entities/cate-business.enum';
import { POS } from '../entities/pos.enum';

export class CreateFormDto {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  date: Date;

  @ApiProperty()
  @IsNotEmpty()
  MerchantID: string;

  @ApiProperty()
  @IsNotEmpty()
  Merchant_Trade_Name: string;

  @ApiProperty()
  @IsNotEmpty()
  Business_type: string;

  @ApiProperty()
  @IsNotEmpty()
  Business_location: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Rc_Number: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  No_of_branches: number;

  @ApiProperty()
  @IsNotEmpty()
  opening_hours: string;
  
  @ApiProperty()
  @IsNotEmpty()
  website: string;

  @ApiProperty()
  @IsNotEmpty()
  Office_address:string;

  @ApiProperty()
  @IsNotEmpty()
  LGA: string;

  @ApiProperty()
  @IsNotEmpty()
  state: string;

  @ApiProperty()
  @IsNotEmpty()
  Name_of_Primary_Contact: string;

  @ApiProperty()
  @IsNotEmpty()
  Designation: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  office_No: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  mobile_No: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid Email.' })
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  Name_of_Secondary_Contact: string;

  @ApiProperty()
  @IsNotEmpty()
  Secondary_Designation: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Secondary_office_No: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  Secondary_mobile_No: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid Email.' })
   Secondary_email: string;

  @ApiProperty()
  @IsNotEmpty()
   No_of_POS_terminal: number;

  @ApiProperty()
  @IsNotEmpty()
  location_of_terminal: string;


  @ApiProperty()
  @IsNotEmpty()
  contact_person: string;

  @ApiProperty()
  @IsNotEmpty()
  contact_mobile_no: string;
  
  @ApiProperty()
  @IsEnum(CategoryBusinessType)
  Business_Category: CategoryBusinessType;

  @ApiProperty()
  @IsNotEmpty()
  bank: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
   Account_No: number;

   @ApiProperty()
   @IsEnum(CardType)
   CardType: CategoryBusinessType;

   @ApiProperty()
   @IsEnum(POS)
   POS:POS;

   @ApiProperty()
   @IsEnum(FormStatus)
   FormStatus: FormStatus;

}