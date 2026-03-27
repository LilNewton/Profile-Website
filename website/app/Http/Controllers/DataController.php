<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataController extends Controller
{
    public function index()
    {
        $categories = [
            'Languages' => [
                ['title' => 'C Language', 'icon' => 'c_language_logo.svg'],
                ['title' => 'Java', 'icon' => 'java_logo.svg'],
                ['title' => 'Python', 'icon' => 'python_logo.svg'],
                ['title' => 'Javascript', 'icon' => 'javascript_logo.svg'],
                ['title' => 'CSS', 'icon' => 'css_logo.svg'],
                ['title' => 'PHP', 'icon' => 'php_logo.svg']
            ],

            'Frameworks' => [
                ['title' => 'React.js', 'icon' => 'react_logo.svg'],
                ['title' => 'Streamlit', 'icon' => 'streamlit_logo.svg'],
                ['title' => 'Laravel', 'icon' => 'laravel_logo.svg']
            ],

            'Designs' => [
                ['title' => 'Canva', 'icon' => 'canva_logo.svg'],
                ['title' => 'Figma', 'icon' => 'figma_logo.svg'],
                ['title' => 'Penpot', 'icon' => 'penpot_logo.svg']
            ],

            "Version Control" => [
                ['title' => 'Git', 'icon' => 'git_logo.svg'],
                ['title' => 'Github', 'icon' => 'github_logo.svg']
            ],

            'Documentation' => [
                ['title' => 'MS Word', 'icon' => 'msword_logo.svg'],
                ['title' => 'Google Docs', 'icon' => 'google_docs_logo.svg'],
                ['title' => 'Libre Office', 'icon' => 'libreoffice_logo.svg'],
                ['title' => 'MS Excel', 'icon' => 'msexcel_logo.svg'],
                ['title' => 'Google Sheets', 'icon' => 'google_sheets_logo.svg']
            ]
        ];

        return view('main', compact(
            'categories'
        ));
    }
}
