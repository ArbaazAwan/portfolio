// src/app/components/projects/projects.component.ts

import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  OnInit,
} from '@angular/core';
import { ParallaxService } from '../services/parallax.service';
export interface Project {
  name: string | undefined;
  duration: string | null;
  technologies: { svg: TECHNOLOGIES_SVG; name: string | undefined }[];
  description: string | null;
  responsibilities: string[] | null;
  images?: string[] | null;
}

export enum TECHNOLOGIES_SVG {
  Angular = '/assets/images/technologies/angular.svg',
  DotNetCore = '/assets/images/technologies/dotnetcore.svg',
  NodeRed = '/assets/images/technologies/node-red.svg',
  Java = '/assets/images/technologies/java.svg',
  SQL = '/assets/images/technologies/sql.svg',
  MySQL = '/assets/images/technologies/mysql.svg',
  PostgreSQL = '/assets/images/technologies/postgresql.svg',
  MongoDB = '/assets/images/technologies/mongodb.svg',
  Firebase = '/assets/images/technologies/firebase.svg',
  React = '/assets/images/technologies/react.svg',
  Nodejs = '/assets/images/technologies/nodejs.svg',
  JavaScript = '/assets/images/technologies/javascript.svg',
  TypeScript = '/assets/images/technologies/typescript.svg',
  HTML5 = '/assets/images/technologies/html5.svg',
  CSS3 = '/assets/images/technologies/css3.svg',
  SASS = '/assets/images/technologies/sass.svg',
  Bootstrap = '/assets/images/technologies/bootstrap.svg',
  MaterialUI = '/assets/images/technologies/materialui.svg',
  AWS = '/assets/images/technologies/aws.svg',
  KenduUI = '/assets/images/technologies/kenduui.svg',
  PrimeNG = 'https://i0.wp.com/www.primefaces.org/wp-content/uploads/2016/10/primeng.png?fit=250%2C250&ssl=1',
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  @ViewChild('elem') elem: ElementRef = {} as ElementRef;
  @ViewChild('elem1') elem1: ElementRef = {} as ElementRef;

  mouseX = 0;
  mouseY = 0;
  top = 60;
  left = 60;
  constructor(
    private parallaxService: ParallaxService,
    private renderer: Renderer2
  ) {}

  projects: Project[] = [
    {
      name: 'Vodacom (DRC)',
      duration: 'May 2024 – present',
      technologies: [
        { name: 'Angular 14', svg: TECHNOLOGIES_SVG.Angular },
        { name: 'Java (back end)', svg: TECHNOLOGIES_SVG.Java },
        { name: 'SQL Server', svg: TECHNOLOGIES_SVG.SQL },
        { name: 'Node-Red', svg: TECHNOLOGIES_SVG.NodeRed },
      ],
      description:
        'The project of Democratic Republic of Congo for Vodacom implementing the use cases and processes',
      responsibilities: [
        'Implemented dynamic form builders for each processes of each use case',
        'Debugging and Enhancements',
      ],
    },
    {
      name: 'Emissions Calculator',
      duration: 'May 2024 – July 2024',
      technologies: [
        {
          name: 'Angular 16',
          svg: TECHNOLOGIES_SVG.Angular,
        },
        {
          name: 'Firebase',
          svg: TECHNOLOGIES_SVG.Firebase,
        }
      ],
      description:
        'Internal Project of Abacus for calculating the emissions of different kinds of fuel types',
      responsibilities: [
        'Implementing the realtime dashboard and analytics.',
        'Writing wireframes for the design and functionality of the app.',
        'Debugging and Enhancements.',
      ],
    },
    {
      name: 'ERP System',
      duration: 'September 2023 – March 2024',
      technologies: [
        { name: 'Angular 14', svg: TECHNOLOGIES_SVG.Angular },
        { name: 'SQL Server', svg: TECHNOLOGIES_SVG.SQL },
        { name: '.NET Core Web APIs', svg: TECHNOLOGIES_SVG.DotNetCore },
        { name: 'PrimeNG', svg: TECHNOLOGIES_SVG.PrimeNG}
      ],
      description: 'ERP System for SMEs',
      responsibilities: [
        'Refactoring the existing code.',
        'Worked on Change Requests and Enhancements.',
        'Implementing new module for HR and Payroll.',
        'Debugging and solving errors.',
        'Improving user experience.',
      ],
    },
    {
      name: 'CMS Oregon NY',
      duration: 'November 2021 – March 2022',
      // technologies: ['NET CORE 5 Web APIs', 'Angular 12', 'SQL Server', 'EF Core', 'Dapper (ORM)'],
      technologies: [
        { name: 'Angular 14', svg: TECHNOLOGIES_SVG.Angular },
        { name: 'SQL Server', svg: TECHNOLOGIES_SVG.SQL },
        { name: '.NET Core Web APIs', svg: TECHNOLOGIES_SVG.DotNetCore },
        { name: 'PrimeNG', svg: TECHNOLOGIES_SVG.PrimeNG },
        { name: 'Material UI', svg: TECHNOLOGIES_SVG.MaterialUI },
        { name: 'AWS Lambda', svg: TECHNOLOGIES_SVG.AWS },
        { name: 'AWS API Gateway', svg: TECHNOLOGIES_SVG.AWS },
        { name: 'AWS Cognito', svg: TECHNOLOGIES_SVG.AWS },
        { name: 'AWS DynamoDB', svg: TECHNOLOGIES_SVG.AWS },
      ],
      description:
        "The HIV Care and Treatment Program is Oregon State's project.",
      responsibilities: [
        'Case Management System (CMS) POCs and Wire Frames.',
        'RESTful APIs for CMS Implementation.',
        'Implementing Micro Front End (MFE) of CMS.',
      ],
    },
    {
      name: 'Veolia, Pricing Portal',
      duration: 'August 2022 – April 2023',
      technologies: [
        { name: 'Angular', svg: TECHNOLOGIES_SVG.Angular },
        { name: 'AWS SAM', svg: TECHNOLOGIES_SVG.AWS },
        { name: 'NodeJS', svg: TECHNOLOGIES_SVG.Nodejs },
        { name: 'PostgreSQL', svg: TECHNOLOGIES_SVG.PostgreSQL },
      ],
      description: 'Veolia is a water treatment',
      responsibilities: [
        'Gather Requirements from Veolia team (client).',
        'Created application front-end wire frames using Angular 14.',
        'Created NodeJS API endpoints in AWS.',
        'Created Database (PostgreSQL).',
      ],
    },
    {
      name: 'Advance Air',
      duration: 'May 2023 – June 2023',
      technologies: [
        { name: 'Angular', svg: TECHNOLOGIES_SVG.Angular },
        { name: 'Kendu UI', svg: TECHNOLOGIES_SVG.KenduUI },
        { name: 'SQL Server', svg: TECHNOLOGIES_SVG.SQL },
        { name: '.NET Core Web APIs', svg: TECHNOLOGIES_SVG.DotNetCore },
      ],
      description: 'IOT device management systems.',
      responsibilities: [
        'Gather Requirements from clients and QA team.',
        'POCs implementation.',
        'Debugging and solving errors.',
        'Improving user experience.',
      ],
    },
    {
      name: 'Water Tronics, Sales Portal',
      duration: 'June 2023 – September 2023',
      technologies: [
        { name: 'Angular 12', svg: TECHNOLOGIES_SVG.Angular},
        { name: 'PrimeNG', svg: TECHNOLOGIES_SVG.PrimeNG},
        { name: 'Material UI', svg: TECHNOLOGIES_SVG.MaterialUI},
        { name: '.NET Core 5 Web APIs', svg: TECHNOLOGIES_SVG.DotNetCore},
        { name: 'SQL Server', svg: TECHNOLOGIES_SVG.SQL}

      ],
      description: 'Pre Sales and Sales Portal.',
      responsibilities: [
        'Implementing new station rules and logics using rule engine.',
        'Implemented Auto Pick of parts based on required station configurations.',
        'Created sales quotation based on parts picked.',
        'Debugging and solving errors.',
        'Improving user experience.',
      ],
    },
  ];

  selectedProject!: Project;

  ngAfterViewInit() {
    this.parallaxService.applyParallax(this.elem.nativeElement);
    this.renderer.listen('document', 'mousemove', (event: MouseEvent) => {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      this.updatePosition();
    });
  }

  updatePosition() {
    this.elem1.nativeElement.style.top = this.mouseY + 'px';
    this.elem1.nativeElement.style.left = this.mouseX + 'px';
  }

  ngOnInit() {
    if (this.projects.length > 0) {
      this.selectProject(this.projects[0]);
    }
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }
}
