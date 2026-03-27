<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chris-John-Borigas</title>

    @vite('resources/css/app.css')
</head>

<body class=web-container>
    <div class="sidebar">

    </div>

    <!--Introduction Section-->
    <div id="intro-section" class="container__section">
        <h2>Chris John B. Borigas</h2>
        <h1>Frontend Developer</h1>
        <p>Good Day! I am Chris John Borigas.
            A frontend developer and Computer Science graduate from
            Bicol University College of Science with 240 hours of
            industry experience and 3 notable projects, focusing on
            building scalable and responsive web solutions.
        </p>
        <button>Resume</button>

    </div>

    <!--About Section-->
    <div id="about-section" class="container__section">
        <h2>I approach projects with a user-centered mindset,
            making sure the projects I handle deliver a smooth and
            straight forward experience for the user.
        </h2>
        <h3 class="section-header">About Me</h3>
        <div class="about-me">
            <h2>Hello There!</h2>
            <p>I'm a computer science graduate frontend developer
                with a user-centered philosophy towards designing
                the structure of features. <br><br>
                My approach centers around creating a smooth user
                experience in consideration with project objectives.
                Utilizing my knowledge in ideation to iterate and
                innovate unto the features of projects through its
                concept, wireframe, and prototype until its release.
            </p>
        </div>
    </div>

    <!--Tools Section-->
    <div id="tools-section" class="container__section">
        <h3 class="section-header">Tools</h3>
        @foreach ($toolCategories as $toolCategoriesName => $tools)
        <div class="card card_tool">
            <h2>{{$toolCategoriesName}}</h2>
            <div class="tool-grid">
                @foreach ($tools as $tool)
                <div class='tool'>
                    <img src="{{ asset('icons/'.$tool['icon']) }}" alt="">
                    <h5>{{$tool['title']}}</h5>
                </div>
                @endforeach
            </div>
        </div>
        @endforeach
    </div>

    <!--Projects Section-->
    <div class="container__section">
        <h3 class="section-header">Selected Projects</h3>
        @foreach ($projects as $project)
        <div class="card card_project">
            <div class="project-title">
                <h4 class="project-count">
                    {{ str($loop->iteration)->padLeft(2, '0') }}
                </h4>
                <h2>{{$project['title']}}</h2>
                <h4>{{$project['subtitle']}}</h4>
            </div>
            <div class="project-tools">
                @foreach ($project['toolsUsed'] as $tool)
                <h5>{{$tool}}</h5>
                @if (!$loop->last)
                <img src="{{ asset('icons/star-circled.svg') }}" alt="">
                @endif
                @endforeach
            </div>
        </div>
        @endforeach
    </div>

    <!--Experience Section-->
    <div class="container__section">
        <h3 class="section-header">Experience</h3>
        <div class="card">
            <h4>Iraya Energies</h4>
            <h2>Software Engineer (OJT)</h2>
            <p>June - July (2024)</p>
        </div>
        <div class="card">
            <h4>Project OLA</h4>
            <h2>Researcher/Frontend Develoer</h2>
            <p>Aujust 2024 - May 2025</p>
        </div>
    </div>

    <!--Contact Section-->
    <div class="container__section">
        <h4>My Contacts</h4>
        <h3>chrisjohnbborigas@gmail.com</h3>
        <div class="contact-icons">

        </div>
    </div>
</body>

</html>