<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataController extends Controller
{
    public function index()
    {
        $languages = [
            ['title' => 'C Language', 'icon' => ''],
            ['title' => 'Java', 'icon' => ''],
            ['title' => 'Python', 'icon' => ''],
            ['title' => 'Javascript', 'icon' => ''],
            ['title' => 'CSS', 'icon' => ''],
            ['title' => 'PHP', 'icon' => '']
        ];

        $frameworks = [
            ['title' => 'React.js', 'icon' => ''],
            ['title' => 'Streamlit', 'icon' => ''],
            ['title' => 'Laravel', 'icon' => '']
        ];

        $designs = [
            ['title' => 'Canva', 'icon' => ''],
            ['title' => 'Figma', 'icon' => ''],
            ['title' => 'Panpot', 'icon' => '']
        ];

        $versionControl = [
            ['title' => 'Git', 'icon' => ''],
            ['title' => 'Github', 'icon' => '']
        ];

        $documentation = [
            ['title' => 'MS Word', 'icon' => ''],
            ['title' => 'Google Docs', 'icon' => ''],
            ['title' => 'Libre Office', 'icon' => ''],
            ['title' => 'MS Excel', 'icon' => ''],
            ['title' => 'Google Sheets', 'icon' => '']
        ];

        return view('main', compact('languages'));
    }
}
