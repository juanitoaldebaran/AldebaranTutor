import { Cog, Zap, Wrench, Cpu } from 'lucide-react';

export const engineeringCourses = [
  {
    id: 1,
    title: "Mechanical Engineering",
    icon: Cog,
    color: "bg-blue-600",
    sections: [
      {
        name: "Fundamentals",
        items: [
          "Mechanical Engineering applies physics and materials science to design mechanical systems.",
          "Core principles: Statics, Dynamics, Thermodynamics, Fluid Mechanics, Heat Transfer.",
          "Applications: Machinery, vehicles, HVAC systems, manufacturing, energy systems.",
          "Engineering Design Process: Define problem → Research → Ideate → Prototype → Test → Iterate.",
          "CAD Software: AutoCAD, SolidWorks, CATIA for 3D modeling and design."
        ]
      },
      {
        name: "Key Concepts",
        items: [
          "Statics: Study of forces in equilibrium, structural analysis, free body diagrams.",
          "Dynamics: Motion of objects under forces, kinematics (position, velocity, acceleration) and kinetics (forces).",
          "Thermodynamics: Energy transfer, heat engines, refrigeration cycles, laws of thermodynamics.",
          "Fluid Mechanics: Behavior of fluids at rest and in motion, Bernoulli's equation, Reynolds number.",
          "Materials Science: Properties, selection, and behavior of engineering materials (metals, polymers, ceramics).",
          "Machine Design: Design of mechanical components like gears, bearings, shafts, springs.",
          "Manufacturing: Casting, machining, welding, additive manufacturing (3D printing)."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Electrical Engineering",
    icon: Zap,
    color: "bg-yellow-600",
    sections: [
      {
        name: "Electrical Fundamentals",
        items: [
          "Electrical Engineering deals with electricity, electronics, and electromagnetism.",
          "Fundamental laws: Ohm's Law (V=IR), Kirchhoff's Laws, Maxwell's Equations.",
          "Applications: Power systems, electronics, telecommunications, control systems, embedded systems.",
          "Voltage, Current, Resistance: Basic electrical quantities and their relationships.",
          "AC vs DC: Alternating Current (sinusoidal) vs Direct Current (constant)."
        ]
      },
      {
        name: "Core Topics",
        items: [
          "Circuit Analysis: DC and AC circuits, network theorems (Thevenin, Norton, Superposition).",
          "Semiconductors: Diodes, transistors (BJT, MOSFET), integrated circuits (ICs).",
          "Digital Logic: Boolean algebra, logic gates (AND, OR, NOT), flip-flops, counters.",
          "Microprocessors: CPU architecture, instruction sets, assembly programming, Arduino, Raspberry Pi.",
          "Signal Processing: Analog and digital signal analysis, Fourier Transform, filters.",
          "Power Systems: Generation, transmission, distribution of electrical power, transformers.",
          "Control Systems: Feedback systems, PID controllers, stability analysis, transfer functions."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Civil Engineering",
    icon: Wrench,
    color: "bg-orange-600",
    sections: [
      {
        name: "Civil Engineering Overview",
        items: [
          "Civil Engineering designs and maintains infrastructure: buildings, roads, bridges, dams, airports.",
          "Sub-disciplines: Structural, Geotechnical, Transportation, Environmental, Water Resources, Construction.",
          "Focus: Sustainability, safety, public welfare, and environmental impact.",
          "Project lifecycle: Planning → Design → Construction → Maintenance.",
          "Codes and Standards: Building codes, safety regulations, environmental regulations."
        ]
      },
      {
        name: "Key Areas",
        items: [
          "Structural Engineering: Design of load-bearing structures, stress analysis, beam theory.",
          "Concrete and Steel Design: Reinforced concrete, prestressed concrete, steel structures.",
          "Geotechnical Engineering: Soil mechanics, foundation design (shallow, deep foundations).",
          "Transportation Engineering: Highway design, traffic engineering, pavement design.",
          "Hydraulics: Flow of water, pipe networks, open channel flow, pumps and turbines.",
          "Construction Management: Project planning, scheduling (CPM, PERT), cost estimation, site management.",
          "Surveying: Land measurement, topographic surveys, GPS, total stations."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Computer Engineering",
    icon: Cpu,
    color: "bg-green-600",
    sections: [
      {
        name: "Computer Engineering Fundamentals",
        items: [
          "Computer Engineering combines electrical engineering and computer science.",
          "Focus: Hardware-software integration, embedded systems, computer architecture.",
          "Applications: Microprocessors, IoT devices, robotics, network systems, mobile devices.",
          "Spans from low-level hardware to high-level software systems.",
          "Career paths: Hardware design, embedded systems, firmware development, system architecture."
        ]
      },
      {
        name: "Core Concepts",
        items: [
          "Digital Design: Logic circuits, combinational and sequential circuits, FSMs (Finite State Machines).",
          "HDL Programming: VHDL and Verilog for hardware description and simulation.",
          "Computer Architecture: CPU design, instruction sets (RISC, CISC), pipelining, cache memory.",
          "Memory Hierarchy: Registers, Cache (L1, L2, L3), RAM, Storage (SSD, HDD).",
          "Embedded Systems: Microcontrollers (ARM, AVR, PIC), real-time operating systems (RTOS).",
          "VLSI Design: Very Large Scale Integration, chip design, semiconductor fabrication.",
          "Computer Networks: OSI model, TCP/IP, routing, switching, network security.",
          "Operating Systems: Process management, memory management, file systems, scheduling algorithms."
        ]
      }
    ]
  }
];