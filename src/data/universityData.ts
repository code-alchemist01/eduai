interface Course {
  id: string;
  title: string;
  description?: string;
}

interface Semester {
  id: string;
  title: string;
  courses: Course[];
}

interface Year {
  id: string;
  title: string;
  semesters: Semester[];
}

interface Department {
  id: string;
  title: string;
  university: string;
  years: Year[];
}

export const universityData: Department[] = [
  {
    id: 'architecture',
    title: 'Mimarlık',
    university: 'ODTÜ - Orta Doğu Teknik Üniversitesi',
    years: [
      {
        id: '1',
        title: '1. Yıl',
        semesters: [
          {
            id: '1',
            title: 'Güz Dönemi',
            courses: [
              { id: 'arch101', title: 'ARCH 101 Basic Design' },
              { id: 'arch103', title: 'ARCH 103 Graphic Communication' },
              { id: 'arch111', title: 'ARCH 111 Introduction to Architectural Concepts' },
              { id: 'math125', title: 'MATH 125 Basic Mathematics I' },
              { id: 'eng101', title: 'ENG 101 English for Academic Purposes I' },
              { id: 'ohs101', title: 'OHS 101 Occupational Health and Safety I' },
              { id: 'is100', title: 'IS 100 Introduction to Information Technologies and Applications' }
            ]
          },
          {
            id: '2',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'arch102', title: 'ARCH 102 Introduction to Architectural Design' },
              { id: 'arch104', title: 'ARCH 104 Graphic Communication' },
              { id: 'arch112', title: 'ARCH 112 Architectural History I' },
              { id: 'math126', title: 'MATH 126 Basic Mathematics II' },
              { id: 'ba100', title: 'BA 100 Career Planning' },
              { id: 'eng102', title: 'ENG 102 English for Academic Purposes II' }
            ]
          }
        ]
      },
      {
        id: '2',
        title: '2. Yıl',
        semesters: [
          {
            id: '3',
            title: 'Güz Dönemi',
            courses: [
              { id: 'arch190', title: 'ARCH 190 Intro to Surveying & Construction Techniques' },
              { id: 'arch201', title: 'ARCH 201 Architectural Design I' },
              { id: 'arch203', title: 'ARCH 203 Digital Media in Architecture I' },
              { id: 'arch211', title: 'ARCH 211 Architectural History II' },
              { id: 'arch231', title: 'ARCH 231 Statics & Strength of Materials' },
              { id: 'arch251', title: 'ARCH 251 Building Materials Technologies' },
              { id: 'arch291', title: 'ARCH 291 Landscape Design' },
              { id: 'eng211', title: 'ENG 211 Academic Oral Presentation Skills' },
              { id: 'ohs301', title: 'OHS 301 Occupational Health and Safety II' },
              { id: 'hist', title: 'Restricted Elective (HIST 2201/2205)' }
            ]
          },
          {
            id: '4',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'arch202', title: 'ARCH 202 Architectural Design II' },
              { id: 'arch204', title: 'ARCH 204 Digital Media in Architecture II' },
              { id: 'arch212', title: 'ARCH 212 Architectural History III' },
              { id: 'arch232', title: 'ARCH 232 Behavior & Analysis of Structures' },
              { id: 'arch252', title: 'ARCH 252 Building Construction Technologies' },
              { id: 'arch282', title: 'ARCH 282 Principles of Built Environment' },
              { id: 'hist2', title: 'Restricted Elective (HIST 2202/2206)' }
            ]
          }
        ]
      },
      {
        id: '3',
        title: '3. Yıl',
        semesters: [
          {
            id: '5',
            title: 'Güz Dönemi',
            courses: [
              { id: 'arch290', title: 'ARCH 290 Internship in Construction' },
              { id: 'arch301', title: 'ARCH 301 Architectural Design III' },
              { id: 'arch331', title: 'ARCH 331 Structural Design in Architecture I' },
              { id: 'arch351', title: 'ARCH 351 Building Detail Modelling' },
              { id: 'arch381', title: 'ARCH 381 Environmental & Building Systems' },
              { id: 'arch393', title: 'ARCH 393 Principles of Cultural Heritage Conservation' },
              { id: 'turkish1', title: 'Turkish Language Elective' },
              { id: 'nontech1', title: 'Non-Technical Elective' }
            ]
          },
          {
            id: '6',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'arch302', title: 'ARCH 302 Architectural Design IV' },
              { id: 'arch312', title: 'ARCH 312 Principles of City Planning & Urban Design' },
              { id: 'arch332', title: 'ARCH 332 Structural Design in Architecture II' },
              { id: 'arch382', title: 'ARCH 382 Environmental Control Technologies' },
              { id: 'electives1', title: 'Elective × 2' },
              { id: 'turkish2', title: 'Turkish Language Elective' }
            ]
          }
        ]
      },
      {
        id: '4',
        title: '4. Yıl',
        semesters: [
          {
            id: '7',
            title: 'Güz Dönemi',
            courses: [
              { id: 'arch390', title: 'ARCH 390 Internship in Professional Practice' },
              { id: 'arch401', title: 'ARCH 401 Architectural Design V' },
              { id: 'electives2', title: 'Elective × 4' }
            ]
          },
          {
            id: '8',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'arch402', title: 'ARCH 402 Architectural Design VI' },
              { id: 'arch452', title: 'ARCH 452 Professional Practice' },
              { id: 'electives3', title: 'Elective × 4' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'economics',
    title: 'Ekonomi',
    university: 'ODTÜ - Orta Doğu Teknik Üniversitesi',
    years: [
      {
        id: '1',
        title: '1. Yıl',
        semesters: [
          {
            id: '1',
            title: 'Güz Dönemi',
            courses: [
              { id: 'econ101', title: 'ECON 101 Introduction to Economics I' },
              { id: 'econ105', title: 'ECON 105 Intro to Research Methods I' },
              { id: 'econ107', title: 'ECON 107 Economy, Society & Civilization I' },
              { id: 'math119', title: 'MATH 119 Calculus with Analytic Geometry' },
              { id: 'eng101', title: 'ENG 101 Development of Reading & Writing Skills I' },
              { id: 'turk101', title: 'TURK 101 Turkish I' },
              { id: 'is100', title: 'IS 100 Introduction to Information Technologies & Applications' }
            ]
          },
          {
            id: '2',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'econ102', title: 'ECON 102 Introduction to Economics II' },
              { id: 'econ106', title: 'ECON 106 Intro to Research Methods II' },
              { id: 'math120', title: 'MATH 120 Calculus of Functions of Several Variables' },
              { id: 'eng102', title: 'ENG 102 Development of Reading & Writing Skills II' },
              { id: 'turk102', title: 'TURK 102 Turkish II' },
              { id: 'ba100', title: 'BA 100 Career Planning' },
              { id: 'elective1', title: 'Elective (1× Freshman Elective)' }
            ]
          }
        ]
      },
      {
        id: '2',
        title: '2. Yıl',
        semesters: [
          {
            id: '3',
            title: 'Güz Dönemi',
            courses: [
              { id: 'econ201', title: 'ECON 201 Microeconomic Theory I' },
              { id: 'econ202', title: 'ECON 202 Macroeconomic Theory I' },
              { id: 'econ205', title: 'ECON 205 Statistics for Economics I' },
              { id: 'econ208', title: 'ECON 208 Social & Economic History II' },
              { id: 'math260', title: 'MATH 260 Basic Linear Algebra' },
              { id: 'hist2201', title: 'HIST 2201 Principles of Kemal Atatürk I' }
            ]
          },
          {
            id: '4',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'econ203', title: 'ECON 203 Microeconomic Theory II' },
              { id: 'econ204', title: 'ECON 204 Macroeconomic Theory II' },
              { id: 'econ206', title: 'ECON 206 Statistics for Economics II' },
              { id: 'eng211', title: 'ENG 211 Advanced Reading & Oral Communication' },
              { id: 'hist2202', title: 'HIST 2202 Principles of Kemal Atatürk II' },
              { id: 'elective2', title: 'Elective (1× 2xx–4xx Elective)' }
            ]
          }
        ]
      },
      {
        id: '3',
        title: '3. Yıl',
        semesters: [
          {
            id: '5',
            title: 'Güz Dönemi',
            courses: [
              { id: 'electives1', title: 'Departmental & Non-Departmental Electives' }
            ]
          },
          {
            id: '6',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'electives2', title: 'Departmental & Non-Departmental Electives' }
            ]
          }
        ]
      },
      {
        id: '4',
        title: '4. Yıl',
        semesters: [
          {
            id: '7',
            title: 'Güz Dönemi',
            courses: [
              { id: 'electives3', title: 'Departmental & Non-Departmental Electives' }
            ]
          },
          {
            id: '8',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'electives4', title: 'Departmental & Non-Departmental Electives' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'chemical_engineering',
    title: 'Kimya Mühendisliği',
    university: 'ODTÜ - Orta Doğu Teknik Üniversitesi',
    years: [
      {
        id: '1',
        title: '1. Yıl',
        semesters: [
          {
            id: '1',
            title: 'Güz Dönemi',
            courses: [
              { id: 'phys105', title: 'PHYS 105 General Physics I' },
              { id: 'chem111', title: 'CHEM 111 General Chemistry I' },
              { id: 'math119', title: 'MATH 119 Calculus with Analytic Geometry' },
              { id: 'me105', title: 'ME 105 Computer Aided Engineering Graphics' },
              { id: 'eng101', title: 'ENG 101 English for Academic Purposes I' },
              { id: 'ohs101', title: 'OHS 101 Occupational Health and Safety I' },
              { id: 'is100', title: 'IS 100 Introduction to Information Technologies and Applications' }
            ]
          },
          {
            id: '2',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'phys106', title: 'PHYS 106 General Physics II' },
              { id: 'chem112', title: 'CHEM 112 General Chemistry II' },
              { id: 'math120', title: 'MATH 120 Calculus of Functions of Several Variables' },
              { id: 'ba100', title: 'BA 100 Career Planning' },
              { id: 'che102', title: 'CHE 102 Introduction to Chemical Engineering' },
              { id: 'ceng240', title: 'CENG 240 Programming with Python for Engineers' },
              { id: 'eng102', title: 'ENG 102 English for Academic Purposes II' }
            ]
          }
        ]
      },
      {
        id: '2',
        title: '2. Yıl',
        semesters: [
          {
            id: '3',
            title: 'Güz Dönemi',
            courses: [
              { id: 'chem220', title: 'CHEM 220 Organic Chemistry' },
              { id: 'math219', title: 'MATH 219 Introduction to Differential Equations' },
              { id: 'che203', title: 'CHE 203 Chemical Process Calculations' },
              { id: 'eng211', title: 'ENG 211 Academic Oral Presentation Skills' },
              { id: 'ohs301', title: 'OHS 301 Occupational Health and Safety II' },
              { id: 'hist', title: 'Restricted Elective (e.g. HIST 2201/2205)' }
            ]
          },
          {
            id: '4',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'chem230', title: 'CHEM 230 Analytical Chemistry for Engineers' },
              { id: 'es361', title: 'ES 361 Computing Methods in Engineering' },
              { id: 'che204', title: 'CHE 204 Thermodynamics I' },
              { id: 'che222', title: 'CHE 222 Fluid Mechanics' },
              { id: 'mete230', title: 'METE 230 Materials Science & Engineering' },
              { id: 'hist2', title: 'Restricted Elective (e.g. HIST 2202/2206)' }
            ]
          }
        ]
      },
      {
        id: '3',
        title: '3. Yıl',
        semesters: [
          {
            id: '5',
            title: 'Güz Dönemi',
            courses: [
              { id: 'che353', title: 'CHE 353 Physical Chemistry II' },
              { id: 'econ210', title: 'ECON 210 Principles of Economics' },
              { id: 'che300', title: 'CHE 300 Summer Practice' },
              { id: 'che305', title: 'CHE 305 Thermodynamics II' },
              { id: 'che327', title: 'CHE 327 Heat & Mass Transfer Operations' },
              { id: 'turk', title: 'Non-Technical Elective (e.g. TURK 105/201/303)' }
            ]
          },
          {
            id: '6',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'che311', title: 'CHE 311 Chemical Reaction Engineering' },
              { id: 'che320', title: 'CHE 320 Chemical Engineering Laboratory I' },
              { id: 'che328', title: 'CHE 328 Separation Processes' },
              { id: 'che352', title: 'CHE 352 Mathematical Modeling in Chemical Engineering' },
              { id: 'restricted', title: 'Restricted Elective' },
              { id: 'turkish', title: 'Turkish Language Elective' }
            ]
          }
        ]
      },
      {
        id: '4',
        title: '4. Yıl',
        semesters: [
          {
            id: '7',
            title: 'Güz Dönemi',
            courses: [
              { id: 'che400', title: 'CHE 400 Summer Practice II' },
              { id: 'che407', title: 'CHE 407 Process Control' },
              { id: 'che410', title: 'CHE 410 Chemical Engineering Laboratory II' },
              { id: 'che417', title: 'CHE 417 Chemical Engineering Design I' },
              { id: 'che423', title: 'CHE 423 Chemical Engineering Economics' },
              { id: 'technical', title: 'Technical Elective' }
            ]
          },
          {
            id: '8',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'che418', title: 'CHE 418 Chemical Engineering Design II' },
              { id: 'che420', title: 'CHE 420 Chemical Engineering Laboratory III' },
              { id: 'free', title: 'Free Elective' },
              { id: 'nontech', title: 'Non-Technical Elective' },
              { id: 'tech2', title: 'Technical Elective × 2' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'industrial_engineering',
    title: 'Endüstri Mühendisliği',
    university: 'ODTÜ - Orta Doğu Teknik Üniversitesi',
    years: [
      {
        id: '1',
        title: '1. Yıl',
        semesters: [
          {
            id: '1',
            title: 'Güz Dönemi',
            courses: [
              { id: 'phys105', title: 'PHYS 105 General Physics I' },
              { id: 'chem107', title: 'CHEM 107 General Chemistry' },
              { id: 'math119', title: 'MATH 119 Calculus with Analytic Geometry' },
              { id: 'ceng240', title: 'CENG 240 Programming with Python for Engineers' },
              { id: 'eng101', title: 'ENG 101 English for Academic Purposes I' },
              { id: 'ohs101', title: 'OHS 101 Occupational Health and Safety I' },
              { id: 'is100', title: 'IS 100 Introduction to Information Technologies and Applications' }
            ]
          },
          {
            id: '2',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'phys106', title: 'PHYS 106 General Physics II' },
              { id: 'math120', title: 'MATH 120 Calculus of Functions of Several Variables' },
              { id: 'math260', title: 'MATH 260 Basic Linear Algebra' },
              { id: 'ba100', title: 'BA 100 Career Planning' },
              { id: 'ie102', title: 'IE 102 Industrial Engineering Orientation' },
              { id: 'me105', title: 'ME 105 Computer Aided Engineering Graphics' },
              { id: 'eng102', title: 'ENG 102 English for Academic Purposes II' }
            ]
          }
        ]
      },
      {
        id: '2',
        title: '2. Yıl',
        semesters: [
          {
            id: '3',
            title: 'Güz Dönemi',
            courses: [
              { id: 'math219', title: 'MATH 219 Introduction to Differential Equations' },
              { id: 'econ211', title: 'ECON 211 Principles of Economics I' },
              { id: 'ie241', title: 'IE 241 Financial & Managerial Accounting for Engineers' },
              { id: 'ie251', title: 'IE 251 Linear Programming' },
              { id: 'ie265', title: 'IE 265 Introduction to Probability' },
              { id: 'me212', title: 'ME 212 Principles of Production Engineering' },
              { id: 'hist', title: 'Restricted Elective (e.g. HIST 2201/2205)' }
            ]
          },
          {
            id: '4',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'econ212', title: 'ECON 212 Principles of Economics II' },
              { id: 'ie252', title: 'IE 252 Network Flows & Integer Programming' },
              { id: 'ie266', title: 'IE 266 Engineering Statistics' },
              { id: 'mete230', title: 'METE 230 Materials Science & Engineering' },
              { id: 'eng211', title: 'ENG 211 Academic Oral Presentation Skills' },
              { id: 'ohs301', title: 'OHS 301 Occupational Health and Safety II' },
              { id: 'hist2', title: 'Restricted Elective (e.g. HIST 2202/2206)' }
            ]
          }
        ]
      },
      {
        id: '3',
        title: '3. Yıl',
        semesters: [
          {
            id: '5',
            title: 'Güz Dönemi',
            courses: [
              { id: 'ee381', title: 'EE 381 Systems and Control' },
              { id: 'ie300', title: 'IE 300 Summer Practice I' },
              { id: 'ie323', title: 'IE 323 Production & Service Operations Planning I' },
              { id: 'ie333', title: 'IE 333 Work Systems Analysis & Design' },
              { id: 'ie347', title: 'IE 347 Engineering Economy' },
              { id: 'ie361', title: 'IE 361 Stochastic Models in Operations Research' },
              { id: 'nontech', title: 'Non-Technical Elective' }
            ]
          },
          {
            id: '6',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'ie304', title: 'IE 304 Production & Service Information Systems' },
              { id: 'ie324', title: 'IE 324 Production & Service Operations Planning II' },
              { id: 'ie368', title: 'IE 368 Quality Planning & Control' },
              { id: 'ie372', title: 'IE 372 Simulation' },
              { id: 'me351', title: 'ME 351 Thermodynamics of Heat Power' },
              { id: 'turkish', title: 'Turkish Language Elective' }
            ]
          }
        ]
      },
      {
        id: '4',
        title: '4. Yıl',
        semesters: [
          {
            id: '7',
            title: 'Güz Dönemi',
            courses: [
              { id: 'ie400', title: 'IE 400 Summer Practice II' },
              { id: 'ie404', title: 'IE 404 Management for Engineers' },
              { id: 'ie422', title: 'IE 422 Seminar in Industrial Engineering' },
              { id: 'ie489', title: 'IE 489 Systems Thinking' },
              { id: 'ie497', title: 'IE 497 Systems Design I' },
              { id: 'nontech2', title: 'Non-Technical Elective' },
              { id: 'tech', title: 'Technical Elective × 2' }
            ]
          },
          {
            id: '8',
            title: 'Bahar Dönemi',
            courses: [
              { id: 'ie498', title: 'IE 498 Systems Design II' },
              { id: 'free', title: 'Free Elective' },
              { id: 'nontech3', title: 'Non-Technical Elective' },
              { id: 'tech2', title: 'Technical Elective × 2' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'mechanical_engineering',
    title: 'Makine Mühendisliği',
    university: 'ODTÜ - Orta Doğu Teknik Üniversitesi',
    years: [
      {
        id: '1',
        title: '1. Yıl',
        semesters: [
          {
            id: '1',
            title: '1. Yarıyıl',
            courses: [
              { id: 'phys105', title: 'PHYS 105 General Physics I' },
              { id: 'math119', title: 'MATH 119 Calculus with Analytic Geometry' },
              { id: 'me117', title: 'ME 117 Computer Aided Engineering Drawing' },
              { id: 'ceng240', title: 'CENG 240 Programming with Python for Engineers' },
              { id: 'eng101', title: 'ENG 101 English for Academic Purposes I' },
              { id: 'ohs101', title: 'OHS 101 Occupational Health & Safety I' },
              { id: 'is100', title: 'IS 100 Intro to IT & Applications' }
            ]
          },
          {
            id: '2',
            title: '2. Yarıyıl',
            courses: [
              { id: 'phys106', title: 'PHYS 106 General Physics II' },
              { id: 'chem107', title: 'CHEM 107 General Chemistry' },
              { id: 'math120', title: 'MATH 120 Calculus of Functions of Several Variables' },
              { id: 'ba100', title: 'BA 100 Career Planning' },
              { id: 'me110', title: 'ME 110 Introduction to Mechanical Engineering' },
              { id: 'eng102', title: 'ENG 102 English for Academic Purposes II' }
            ]
          }
        ]
      },
      {
        id: '2',
        title: '2. Yıl',
        semesters: [
          {
            id: '3',
            title: '3. Yarıyıl',
            courses: [
              { id: 'math219', title: 'MATH 219 Introduction to Differential Equations' },
              { id: 'ee209', title: 'EE 209 Fundamentals of Electrical & Electronic Eng.' },
              { id: 'me203', title: 'ME 203 Thermodynamics I' },
              { id: 'me205', title: 'ME 205 Statics' },
              { id: 'mete230', title: 'METE 230 Materials Science & Engineering' },
              { id: 'eng211', title: 'ENG 211 Academic Oral Presentation Skills' },
              { id: 'restricted1', title: 'Kısıtlı Seçmeli' }
            ]
          },
          {
            id: '4',
            title: '4. Yarıyıl',
            courses: [
              { id: 'me202', title: 'ME 202 Manufacturing Technologies' },
              { id: 'me204', title: 'ME 204 Thermodynamics II' },
              { id: 'me206', title: 'ME 206 Strength of Materials' },
              { id: 'me208', title: 'ME 208 Dynamics' },
              { id: 'me210', title: 'ME 210 Applied Mathematics for Engineers' },
              { id: 'restricted2', title: 'Kısıtlı Seçmeli' }
            ]
          }
        ]
      },
      {
        id: '3',
        title: '3. Yıl',
        semesters: [
          {
            id: '5',
            title: '5. Yarıyıl',
            courses: [
              { id: 'econ210', title: 'ECON 210 Principles of Economics' },
              { id: 'me300', title: 'ME 300 Summer Practice I' },
              { id: 'me301', title: 'ME 301 Theory of Machines I' },
              { id: 'me303', title: 'ME 303 Manufacturing Engineering' },
              { id: 'me305', title: 'ME 305 Fluid Mechanics I' },
              { id: 'me307', title: 'ME 307 Machine Elements I' },
              { id: 'me311', title: 'ME 311 Heat Transfer' },
              { id: 'turkish1', title: 'Türkçe Seçmeli' }
            ]
          },
          {
            id: '6',
            title: '6. Yarıyıl',
            courses: [
              { id: 'me302', title: 'ME 302 Theory of Machines II' },
              { id: 'me304', title: 'ME 304 Control Systems' },
              { id: 'me306', title: 'ME 306 Fluid Mechanics II' },
              { id: 'me308', title: 'ME 308 Machine Elements II' },
              { id: 'me310', title: 'ME 310 Numerical Methods' },
              { id: 'me312', title: 'ME 312 Thermal Engineering' },
              { id: 'turkish2', title: 'Türkçe Seçmeli' }
            ]
          }
        ]
      },
      {
        id: '4',
        title: '4. Yıl',
        semesters: [
          {
            id: '7',
            title: '7. Yarıyıl',
            courses: [
              { id: 'me400', title: 'ME 400 Summer Practice II' },
              { id: 'me407', title: 'ME 407 Mechanical Engineering Design' },
              { id: 'ohs301', title: 'OHS 301 Occupational Health & Safety II' },
              { id: 'electives1', title: 'Serbest, Teknik ve Teknik Olmayan Seçmeliler' }
            ]
          },
          {
            id: '8',
            title: '8. Yarıyıl',
            courses: [
              { id: 'me410', title: 'ME 410 Mechanical Eng. Systems Lab.' },
              { id: 'electives2', title: 'Kısıtlı, Teknik ve Olmayan Seçmeliler' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'psychology',
    title: 'Psikoloji',
    university: 'ODTÜ Kuzey Kıbrıs Kampüsü',
    years: [
      {
        id: '1',
        title: '1. Yıl',
        semesters: [
          {
            id: '1',
            title: '1. Dönem',
            courses: [
              { id: 'engl101', title: 'ENGL 101 Development of Reading & Writing Skills I' },
              { id: 'psyc101', title: 'PSYC 101 Introduction to Psychology I' },
              { id: 'psyc116', title: 'PSYC 116 Statistics for Psychology I' },
              { id: 'bio106', title: 'BIO 106 General Biology' },
              { id: 'turkish1', title: 'Türkçe I veya Elementary Turkish + Non-Dept. Elective' }
            ]
          },
          {
            id: '2',
            title: '2. Dönem',
            courses: [
              { id: 'bus100', title: 'BUS 100 Career Planning' },
              { id: 'cng100', title: 'CNG 100 Intro to IT & Applications' },
              { id: 'engl102', title: 'ENGL 102 Development of Reading & Writing Skills II' },
              { id: 'psyc102', title: 'PSYC 102 Introduction to Psychology II' },
              { id: 'psyc113', title: 'PSYC 113 Research Methods in Psychology I' },
              { id: 'socl109', title: 'SOCL 109 Introduction to Sociology' },
              { id: 'turkish2', title: 'Türkçe II veya Intermediate Turkish + Non-Dept. Elective' }
            ]
          }
        ]
      },
      {
        id: '2',
        title: '2. Yıl',
        semesters: [
          {
            id: '3',
            title: '3. Dönem',
            courses: [
              { id: 'engl211', title: 'ENGL 211 Academic Oral Presentation Skills' },
              { id: 'psyc217', title: 'PSYC 217 Statistics for Psychology II' },
              { id: 'psyc221', title: 'PSYC 221 Developmental Psychology I' },
              { id: 'psyc251', title: 'PSYC 251 Social Psychology I' },
              { id: 'psyc281', title: 'PSYC 281 Experimental Psychology I: Learning' },
              { id: 'history1', title: 'History Elective + Semester Elective' }
            ]
          },
          {
            id: '4',
            title: '4. Dönem',
            courses: [
              { id: 'psyc200', title: 'PSYC 200 Ethics in Research & Practice' },
              { id: 'psyc214', title: 'PSYC 214 Research Methods in Psychology II' },
              { id: 'psyc222', title: 'PSYC 222 Developmental Psychology II' },
              { id: 'psyc252', title: 'PSYC 252 Social Psychology II' },
              { id: 'psyc284', title: 'PSYC 284 Experimental Psychology II: Cognition' },
              { id: 'history2', title: 'History Elective + Non-Dept. Elective' }
            ]
          }
        ]
      },
      {
        id: '3',
        title: '3. Yıl',
        semesters: [
          {
            id: '5',
            title: '5. Dönem',
            courses: [
              { id: 'psyc331', title: 'PSYC 331 Testing & Measurement in Psychology' },
              { id: 'psyc335', title: 'PSYC 335 Industrial Psychology' },
              { id: 'psyc340', title: 'PSYC 340 Theories of Personality' },
              { id: 'electives1', title: 'Dept. Elective + Non-Dept. Elective' }
            ]
          },
          {
            id: '6',
            title: '6. Dönem',
            courses: [
              { id: 'engl311', title: 'ENGL 311 Advanced Communication Skills' },
              { id: 'psyc342', title: 'PSYC 342 Psychopathology' },
              { id: 'psyc374', title: 'PSYC 374 Biological Psychology' },
              { id: 'electives2', title: 'Non-Dept. Elective ×2' }
            ]
          }
        ]
      },
      {
        id: '4',
        title: '4. Yıl',
        semesters: [
          {
            id: '7',
            title: '7. Dönem',
            courses: [
              { id: 'psyc400', title: 'PSYC 400 Summer Practice' },
              { id: 'psyc442', title: 'PSYC 442 Clinical Psychology' },
              { id: 'psyc449', title: 'PSYC 449 Health Psychology' },
              { id: 'electives3', title: 'Dept. Elective ×3' }
            ]
          },
          {
            id: '8',
            title: '8. Dönem',
            courses: [
              { id: 'electives4', title: 'Dept. Elective ×4' },
              { id: 'electives5', title: 'Non-Dept. Elective' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'computer_engineering',
    title: 'Bilgisayar Mühendisliği',
    university: 'ODTÜ - Orta Doğu Teknik Üniversitesi',
    years: [
      {
        id: '1',
        title: '1. Yıl',
        semesters: [
          {
            id: '1',
            title: '1. Dönem',
            courses: [
              { id: 'math119', title: 'MATH 119 Kalkülüs-Analitik Geometri' },
              { id: 'phys105', title: 'PHYS 105 Genel Fizik I' },
              { id: 'chem107', title: 'CHEM 107 Genel Kimya' },
              { id: 'ceng100', title: 'CENG 100 Bilgisayara Yönlendirme veya CENG 111 Bilgisayar Mühendisliğine Giriş' },
              { id: 'eng101', title: 'ENG 101 Akademik İngilizce I' },
              { id: 'is100', title: 'IS 100 Intro to Information Technologies & Applications' }
            ]
          },
          {
            id: '2',
            title: '2. Dönem',
            courses: [
              { id: 'math120', title: 'MATH 120 Kalkülüs–Çok Değişkenli Fonksiyonlar' },
              { id: 'phys106', title: 'PHYS 106 Genel Fizik II' },
              { id: 'math260', title: 'MATH 260 Temel Doğrusal Cebir' },
              { id: 'ceng140', title: 'CENG 140 C Programlama' },
              { id: 'eng102', title: 'ENG 102 Akademik İngilizce II' }
            ]
          }
        ]
      },
      {
        id: '2',
        title: '2. Yıl',
        semesters: [
          {
            id: '3',
            title: '3. Dönem',
            courses: [
              { id: 'math219', title: 'MATH 219 Türevsel Denklemlere Giriş' },
              { id: 'ee281', title: 'EE 281 Elektrik Devreleri' },
              { id: 'ceng213', title: 'CENG 213 Veri Yapıları' },
              { id: 'ceng223', title: 'CENG 223 Kesikli Hesaplama Yapıları' },
              { id: 'eng211', title: 'ENG 211 Sözlü Sunum Teknikleri (İngilizce)' },
              { id: 'hist2201', title: 'HIST 2201 Atatürk İlkeleri ve İnkılâp Tarihi I' },
              { id: 'ohs301', title: 'OHS 301 Occupational Health & Safety II' }
            ]
          },
          {
            id: '4',
            title: '4. Dönem',
            courses: [
              { id: 'stat221', title: 'STAT 221 Olasılık ve İstatistik' },
              { id: 'ceng232', title: 'CENG 232 Sayısal Mantık Tasarımı' },
              { id: 'ceng242', title: 'CENG 242 Programlama Dili Kavramları' },
              { id: 'ceng280', title: 'CENG 280 Formel Diller ve Otomatlar' },
              { id: 'ee282', title: 'EE 282 Sayısal Elektroniğe Giriş' },
              { id: 'hist2202', title: 'HIST 2202 Atatürk İlkeleri ve İnkılâp Tarihi II' }
            ]
          }
        ]
      },
      {
        id: '3',
        title: '3. Yıl',
        semesters: [
          {
            id: '5',
            title: '5. Dönem',
            courses: [
              { id: 'ceng315', title: 'CENG 315 Algoritmalar' },
              { id: 'ceng331', title: 'CENG 331 Bilgisayar Mimarisi' },
              { id: 'ceng351', title: 'CENG 351 Veri Yönetimi' },
              { id: 'ceng300', title: 'Yaz Stajı I (CENG 300)' },
              { id: 'turk303', title: 'TURK 303 Türkçe I (seçmeli)' }
            ]
          },
          {
            id: '6',
            title: '6. Dönem',
            courses: [
              { id: 'ceng334', title: 'CENG 334 İşletim Sistemleri' },
              { id: 'ceng336', title: 'CENG 336 Tümleşik Sistem Geliştirmeye Giriş' },
              { id: 'ceng350', title: 'CENG 350 Yazılım Mühendisliği' },
              { id: 'ceng382', title: 'CENG 382 Sinyaller ve Sistemler' },
              { id: 'turk304', title: 'TURK 304 Türkçe II (seçmeli)' }
            ]
          }
        ]
      },
      {
        id: '4',
        title: '4. Yıl',
        semesters: [
          {
            id: '7',
            title: '7. Dönem',
            courses: [
              { id: 'ceng477', title: 'CENG 477 Bilgisayarlı Grafik' },
              { id: 'ceng491', title: 'CENG 491 Bilgisayar Mühendisliği Tasarımı I' },
              { id: 'ceng400', title: 'Yaz Stajı II (CENG 400)' },
              { id: 'elective1', title: 'Teknik ve Serbest Seçmeliler' }
            ]
          },
          {
            id: '8',
            title: '8. Dönem',
            courses: [
              { id: 'ceng436', title: 'CENG 436 Veri İletişimi ve Bilgisayar Ağları' },
              { id: 'ceng492', title: 'CENG 492 Bilgisayar Mühendisliği Tasarımı II' },
              { id: 'elective2', title: 'Teknik ve Serbest Seçmeliler' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'electrical_engineering',
    title: 'Elektrik ve Elektronik Mühendisliği',
    university: 'ODTÜ - Orta Doğu Teknik Üniversitesi',
    years: [
      {
        id: '1',
        title: '1. Yıl',
        semesters: [
          {
            id: '1',
            title: '1. Dönem',
            courses: [
              { id: 'phys105', title: 'PHYS 105 General Physics I' },
              { id: 'chem107', title: 'CHEM 107 General Chemistry' },
              { id: 'math129', title: 'MATH 129 Single Variable Calculus' },
              { id: 'ceng240', title: 'CENG 240 Programming with Python for Engineers' },
              { id: 'eng101', title: 'ENG 101 English for Academic Purposes I' },
              { id: 'ohs101', title: 'OHS 101 Occupational Health & Safety I' },
              { id: 'is100', title: 'IS 100 Intro to IT & Applications' }
            ]
          },
          {
            id: '2',
            title: '2. Dönem',
            courses: [
              { id: 'phys106', title: 'PHYS 106 General Physics II' },
              { id: 'math120', title: 'MATH 120 Calculus of Functions of Several Variables' },
              { id: 'math260', title: 'MATH 260 Basic Linear Algebra' },
              { id: 'ee101', title: 'EE 101 Intro to Electrical & Electronics Engineering' },
              { id: 'me105', title: 'ME 105 Computer Aided Engineering Graphics' },
              { id: 'eng102', title: 'ENG 102 English for Academic Purposes II' },
              { id: 'ba100', title: 'BA 100 Career Planning' }
            ]
          }
        ]
      },
      {
        id: '2',
        title: '2. Yıl',
        semesters: [
          {
            id: '3',
            title: '3. Dönem',
            courses: [
              { id: 'phys213', title: 'PHYS 213 General Physics III' },
              { id: 'math219', title: 'MATH 219 Introduction to Differential Equations' },
              { id: 'ee201', title: 'EE 201 Circuit Theory I' },
              { id: 'ee213', title: 'EE 213 Electrical Circuits Lab' },
              { id: 'eng211', title: 'ENG 211 Academic Oral Presentation Skills' },
              { id: 'ohs301', title: 'OHS 301 Occupational Health & Safety II' },
              { id: 'restricted', title: 'Kısıtlı Seçmeli' }
            ]
          },
          {
            id: '4',
            title: '4. Dönem',
            courses: [
              { id: 'ee202', title: 'EE 202 Circuit Theory II' },
              { id: 'ee212', title: 'EE 212 Semiconductor Devices & Modeling' },
              { id: 'ee214', title: 'EE 214 Electronic Circuits Lab' },
              { id: 'ee224', title: 'EE 224 Electromagnetic Theory' },
              { id: 'ee230', title: 'EE 230 Probability & Random Variables' },
              { id: 'nontechnical', title: 'Teknik Olmayan Seçmeli' }
            ]
          }
        ]
      },
      {
        id: '3',
        title: '3. Yıl',
        semesters: [
          {
            id: '5',
            title: '5. Dönem',
            courses: [
              { id: 'ee300', title: 'EE 300 Summer Practice I' },
              { id: 'ee301', title: 'EE 301 Signals and Systems I' },
              { id: 'ee303', title: 'EE 303 Electromagnetic Waves' },
              { id: 'ee311', title: 'EE 311 Analog Electronics' },
              { id: 'ee313', title: 'EE 313 Analog Electronics Lab' },
              { id: 'ee361', title: 'EE 361 Electromechanical Energy Conversion I' },
              { id: 'nontechnical2', title: 'Teknik Olmayan Seçmeli' }
            ]
          },
          {
            id: '6',
            title: '6. Dönem',
            courses: [
              { id: 'ee302', title: 'EE 302 Feedback Systems' },
              { id: 'ee314', title: 'EE 314 Digital Electronics Lab' },
              { id: 'ee348', title: 'EE 348 Introduction to Logic Design' },
              { id: 'restricted2', title: 'Kısıtlı Seçmeli ×2' },
              { id: 'nontechnical3', title: 'Teknik Olmayan Seçmeli' }
            ]
          }
        ]
      },
      {
        id: '4',
        title: '4. Yıl',
        semesters: [
          {
            id: '7',
            title: '7. Dönem',
            courses: [
              { id: 'ee400', title: 'EE 400 Summer Practice II' },
              { id: 'ee493', title: 'EE 493 Engineering Design I' },
              { id: 'electives', title: 'Serbest ve Teknik Seçmeliler' }
            ]
          },
          {
            id: '8',
            title: '8. Dönem',
            courses: [
              { id: 'ee494', title: 'EE 494 Engineering Design II' },
              { id: 'technical', title: 'Teknik Seçmeliler' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'business_administration',
    title: 'İşletme',
    university: 'ODTÜ - Orta Doğu Teknik Üniversitesi',
    years: [
      {
        id: '1',
        title: '1. Yıl',
        semesters: [
          {
            id: '1',
            title: '1. Dönem',
            courses: [
              { id: 'ba1101', title: 'BA 1101 İşletmenin Temelleri' },
              { id: 'ba1103', title: 'BA 1103 İşletme Uygulamaları Atölyesi' },
              { id: 'ba1201', title: 'BA 1201 Davranış Bilimlerinin İlkeleri' },
              { id: 'ba1401', title: 'BA 1401 Finansal Muhasebe' },
              { id: 'eng101', title: 'ENG 101 Akademik İngilizce I' },
              { id: 'math117', title: 'MATH 117 Kalkülüs I' },
              { id: 'turk101', title: 'TURK 101 Türkçe I' },
              { id: 'is100', title: 'IS 100 Bilgi Teknolojileri ve Uygulamalarına Giriş' }
            ]
          },
          {
            id: '2',
            title: '2. Dönem',
            courses: [
              { id: 'ba1502', title: 'BA 1502 İşletme için İstatistik' },
              { id: 'math118', title: 'MATH 118 Kalkülüs II' },
              { id: 'adm102', title: 'ADM 102 Hukuka Giriş' },
              { id: 'econ122', title: 'ECON 122 Makroekonominin İlkeleri' },
              { id: 'eng102', title: 'ENG 102 Akademik İngilizce II' },
              { id: 'turk102', title: 'TURK 102 Türkçe II' }
            ]
          }
        ]
      },
      {
        id: '2',
        title: '2. Yıl',
        semesters: [
          {
            id: '3',
            title: '3. Dönem',
            courses: [
              { id: 'ba2203', title: 'BA 2203 Örgütsel Davranış' },
              { id: 'ba2601', title: 'BA 2601 Üretim Yönetimi' },
              { id: 'ba2701', title: 'BA 2701 Pazarlamanın İlkeleri' },
              { id: 'ba2801', title: 'BA 2801 Mikroekonomi' },
              { id: 'elective', title: 'Serbest Seçmeli' },
              { id: 'hist2201', title: 'HIST 2201 Kemal Atatürk İlkeleri I' }
            ]
          },
          {
            id: '4',
            title: '4. Dönem',
            courses: [
              { id: 'ba2204', title: 'BA 2204 İnsan Kaynakları Yönetimi' },
              { id: 'ba2206', title: 'BA 2206 Örgüt Kuramı' },
              { id: 'ba2802', title: 'BA 2802 Finansın İlkeleri' },
              { id: 'eng211', title: 'ENG 211 Akademik Sözlü Sunum Becerileri' },
              { id: 'elective2', title: 'Serbest Seçmeli' },
              { id: 'hist2202', title: 'HIST 2202 Kemal Atatürk İlkeleri II' }
            ]
          }
        ]
      },
      {
        id: '3',
        title: '3. Yıl',
        semesters: [
          {
            id: '5',
            title: '5. Dönem',
            courses: [
              { id: 'eng311', title: 'ENG 311 İleri İletişim Becerileri' },
              { id: 'ba3301', title: 'BA 3301 Bilgi Sistemleri' },
              { id: 'dept_elective', title: 'Bölüm Seçmelisi ×3' }
            ]
          },
          {
            id: '6',
            title: '6. Dönem',
            courses: [
              { id: 'ba3504', title: 'BA 3504 Yönetim Bilimi' },
              { id: 'dept_elective2', title: 'Bölüm/Dışı Seçmeli ×3' },
              { id: 'free_elective', title: 'Serbest Seçmeli' }
            ]
          }
        ]
      },
      {
        id: '4',
        title: '4. Yıl',
        semesters: [
          {
            id: '7',
            title: '7. Dönem',
            courses: [
              { id: 'ba4103', title: 'BA 4103 Stratejik Yönetim' },
              { id: 'ba4104', title: 'BA 4104 Yönetim Becerileri Laboratuvarı II' },
              { id: 'dept_elective3', title: 'Bölüm Seçmelisi ×4' }
            ]
          },
          {
            id: '8',
            title: '8. Dönem',
            courses: [
              { id: 'ba4106', title: 'BA 4106 İşletme Hukuku' },
              { id: 'dept_elective4', title: 'Bölüm/Dışı Seçmeli ×4' }
            ]
          }
        ]
      }
    ]
  }
];