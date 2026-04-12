<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataController extends Controller
{
    public function index()
    {
        $toolCategories = [
            'LANGUAGES' => [
                ['title' => 'C Language', 'icon' => 'c_language_logo.svg'],
                ['title' => 'Java', 'icon' => 'java_logo.svg'],
                ['title' => 'Python', 'icon' => 'python_logo.svg'],
                ['title' => 'Javascript', 'icon' => 'javascript_logo.svg'],
                ['title' => 'CSS', 'icon' => 'css_logo.svg'],
                ['title' => 'PHP', 'icon' => 'php_logo.svg']
            ],

            'FRAMEWORKS' => [
                ['title' => 'React.js', 'icon' => 'react_logo.svg'],
                ['title' => 'Streamlit', 'icon' => 'streamlit_logo.svg'],
                ['title' => 'Laravel', 'icon' => 'laravel_logo.svg']
            ],

            'DESIGNS' => [
                ['title' => 'Canva', 'icon' => 'canva_logo.svg'],
                ['title' => 'Figma', 'icon' => 'figma_logo.svg'],
                ['title' => 'Penpot', 'icon' => 'penpot_logo.svg']
            ],

            'VERSION CONTROL' => [
                ['title' => 'Git', 'icon' => 'git_logo.svg'],
                ['title' => 'Github', 'icon' => 'github_logo.svg']
            ],

            'DOCUMENTATION' => [
                ['title' => 'MS Word', 'icon' => 'msword_logo.svg'],
                ['title' => 'Google Docs', 'icon' => 'google_docs_logo.svg'],
                ['title' => 'Libre Office', 'icon' => 'libreoffice_logo.svg'],
                ['title' => 'MS Excel', 'icon' => 'msexcel_logo.svg'],
                ['title' => 'Google Sheets', 'icon' => 'google_sheets_logo.svg']
            ]
        ];

        $projects = [
            [
                'title' => 'Raya',
                'subtitle' => 'Chatbot for Unstructured Research Data',
                'toolsUsed' => ['Python', 'Streamlit', 'Figma']
            ],
            [
                'title' => 'OLA',
                'subtitle' => 'A Games of the Generals (GG) AI Strategy Engine Trained Using Self-Play',
                'toolsUsed' => ['Javascript', 'React.js', 'CSS']
            ]
        ];

        $experiences = [
            [
                'group' => 'Iraya Energies',
                'role' => 'Software Engineer (OJT)',
                'start_date' => 'June 2024',
                'end_date' => 'July 2024'
            ],
            [
                'group' => 'Project Ola',
                'role' => 'Researcher/Frontend Developer',
                'start_date' => 'August 2024',
                'end_date' => 'May 2025'
            ]
        ];

        $contacts = [
            [
                'title' => 'Gmail',
                'icon' => 'gmail_logo.svg'
            ],
            [
                'title' => 'Github',
                'icon' => 'github_logo.svg'
            ],
            [
                'title' => 'LinkedIn',
                'icon' => 'linkedin_logo.svg'
            ],
            [
                'title' => 'Facebook',
                'icon' => 'facebook_logo.svg'
            ]
        ];

        return view('main', compact('toolCategories', 'projects', 'experiences', 'contacts'));
    }
}
