import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: string[] = [
    "Verbal Communication Skills",
    "Verbal and non Communication Skills",
    "Active Listening",
    "Small Skill",
    "Moderate Skills",
    "Verbal Communication Skills",
    "Verbal and non Communication Skills",
    "Active Listening",
    "Small Skill",
    "Moderate Skills"
  ];

}
