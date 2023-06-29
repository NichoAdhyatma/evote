<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HaDocument</title>
</head>

<body>

    <h1>
        Pemira KPU FH 2023
    </h1>
    <p>
        Halo <span class="font-bold text-blue-500">{{ $user->name }}</span>

    </p>
    <p>
        Terimakasih telah berpartisipasi dalam PEMIRA KPU FH 2023
    </p>
    <p>
        Anda di undang untuk mengikuti PEMIRA KPU FH 2023 pada :
    </p>
    <ul>
        <li>
            Hari : Jumat , 30 Juni 2023
        </li>
        <li>
            Jam : 07.30 - 15.30
        </li>
        <li>
            Link Pemira : menyusul

        </li>
        <li>
            Username Email : {{ $user->email }}
        </li>
        <li>
            Token : {{ $user->token }}
        </li>
    </ul>
</body>

</html>
