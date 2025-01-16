import { ApiProperty } from "@nestjs/swagger";
import { Jenis_Kelamin } from "@prisma/client";
import { IsString, IsNotEmpty, Length, IsEnum } from "class-validator";

export class updatedMahasiswaDTO {

    @ApiProperty({description : "Nim", 
        type : String,
        example : "BASO HAMZAH"
    })
    @IsString()
    @IsNotEmpty()
    nim : string;

    @ApiProperty({description : "kelas mahasiswa", 
        type : String,
        example : "BASO HAMZAH"
    })
    
    @IsString()
    @IsNotEmpty()
    nama : string;

    @ApiProperty({description : "kelas", 
        type : String,
        example : "5B"
    })
    @IsString()
    @IsNotEmpty()
    @Length(1, 50)
    kelas : string;

    @ApiProperty({description : "jurusan", 
        type : String,
        example : "INFORMATIKA"
    })
    @IsString()
    @IsNotEmpty()
    @Length(1, 50)
    jurusan : string;

    @ApiProperty({
        description: 'Jenis Kelamin',
        enum : Jenis_Kelamin,
        example: 'L',
      })
    
    @IsEnum(Jenis_Kelamin)
    jenis_kelamin : Jenis_Kelamin;

}