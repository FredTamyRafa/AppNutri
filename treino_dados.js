// treino_dados.js - Banco de Dados de Treinos (FitTrack Pro)

const treinoSemana = {
    "1": { // Segunda-feira
        diaNome: "Segunda-feira",
        foco: "Frontal de Coxas, Glúteos e Abdômen",
        aquecimento: { nome: "Bicicleta e Mobilidade Articular", tempo: 10 },
        blocos: [
            {
                tipo: "biset",
                titulo: "Bi-set 1",
                corFundo: "bg-purple-50 border-purple-200",
                corBarra: "bg-purple-500",
                series: [
                    { reps: "15", ex1: "Leg Press 45°", ex2: "Agachamento com Salto (15 rep)", descanso: 40 },
                    { reps: "12", ex1: "Leg Press 45°", ex2: "Agachamento com Salto (15 rep)", descanso: 40 },
                    { reps: "10", ex1: "Leg Press 45°", ex2: "Agachamento com Salto (15 rep)", descanso: 40 },
                    { reps: "8", ex1: "Leg Press 45°", ex2: "Agachamento com Salto (15 rep)", descanso: 80 }
                ]
            },
            {
                tipo: "biset",
                titulo: "Bi-set 2",
                corFundo: "bg-pink-50 border-pink-200",
                corBarra: "bg-pink-500",
                series: [
                    { reps: "15", ex1: "Cadeira Extensora (pico 2s)", ex2: "Polichinelos (40 rep)", descanso: 40 },
                    { reps: "12", ex1: "Cadeira Extensora (pico 2s)", ex2: "Polichinelos (40 rep)", descanso: 40 },
                    { reps: "10", ex1: "Cadeira Extensora (pico 2s)", ex2: "Polichinelos (40 rep)", descanso: 40 },
                    { reps: "8", ex1: "Cadeira Extensora (pico 2s)", ex2: "Polichinelos (40 rep)", descanso: 80 }
                ]
            },
            {
                tipo: "biset",
                titulo: "Bi-set 3",
                corFundo: "bg-blue-50 border-blue-200",
                corBarra: "bg-blue-500",
                series: [
                    { reps: "15", ex1: "Agachamento Sumô Halteres", ex2: "Passada Livre (20 passos)", descanso: 40 },
                    { reps: "12", ex1: "Agachamento Sumô Halteres", ex2: "Passada Livre (20 passos)", descanso: 40 },
                    { reps: "10", ex1: "Agachamento Sumô Halteres", ex2: "Passada Livre (20 passos)", descanso: 40 },
                    { reps: "8", ex1: "Agachamento Sumô Halteres", ex2: "Passada Livre (20 passos)", descanso: 80 }
                ]
            },
            {
                tipo: "abdomen",
                titulo: "Abdômen (Core Pós-Parto)",
                corFundo: "bg-emerald-50 border-emerald-200",
                corBarra: "bg-emerald-500",
                series: [
                    { reps: "20s", ex1: "Abdominal Bracing (Isometria)", descanso: 40 },
                    { reps: "20s", ex1: "Abdominal Bracing (Isometria)", descanso: 40 },
                    { reps: "20s", ex1: "Abdominal Bracing (Isometria)", descanso: 40 },
                    { reps: "20s", ex1: "Abdominal Bracing (Isometria)", descanso: 40 },
                    { reps: "20s", ex1: "Abdominal Bracing (Isometria)", descanso: 80 },
                    { reps: "45s", ex1: "Prancha Frontal", descanso: 40 },
                    { reps: "45s", ex1: "Prancha Frontal", descanso: 40 },
                    { reps: "45s", ex1: "Prancha Frontal", descanso: 0 }
                ]
            }
        ]
    },
    "2": { // Terça-feira
        diaNome: "Terça-feira",
        foco: "Posterior de Coxas, Glúteos e Alongamento",
        aquecimento: { nome: "Esteira ou Elíptico", tempo: 10 },
        blocos: [
            {
                tipo: "biset",
                titulo: "Bi-set 1",
                corFundo: "bg-purple-50 border-purple-200",
                corBarra: "bg-purple-500",
                series: [
                    { reps: "15", ex1: "Elevação Pélvica Máquina", ex2: "Kettlebell Swing (15 rep)", descanso: 40 },
                    { reps: "12", ex1: "Elevação Pélvica Máquina", ex2: "Kettlebell Swing (15 rep)", descanso: 40 },
                    { reps: "10", ex1: "Elevação Pélvica Máquina", ex2: "Kettlebell Swing (15 rep)", descanso: 40 },
                    { reps: "8", ex1: "Elevação Pélvica Máquina", ex2: "Kettlebell Swing (15 rep)", descanso: 80 }
                ]
            },
            {
                tipo: "biset",
                titulo: "Bi-set 2",
                corFundo: "bg-pink-50 border-pink-200",
                corBarra: "bg-pink-500",
                series: [
                    { reps: "15", ex1: "Cadeira Flexora", ex2: "Stiff com Halteres (15 rep)", descanso: 40 },
                    { reps: "12", ex1: "Cadeira Flexora", ex2: "Stiff com Halteres (15 rep)", descanso: 40 },
                    { reps: "10", ex1: "Cadeira Flexora", ex2: "Stiff com Halteres (15 rep)", descanso: 40 },
                    { reps: "8", ex1: "Cadeira Flexora", ex2: "Stiff com Halteres (15 rep)", descanso: 80 }
                ]
            },
            {
                tipo: "biset",
                titulo: "Bi-set 3",
                corFundo: "bg-blue-50 border-blue-200",
                corBarra: "bg-blue-500",
                series: [
                    { reps: "15", ex1: "Mesa Flexora", ex2: "Corrida calcanhar glúteo (40s)", descanso: 40 },
                    { reps: "12", ex1: "Mesa Flexora", ex2: "Corrida calcanhar glúteo (40s)", descanso: 40 },
                    { reps: "10", ex1: "Mesa Flexora", ex2: "Corrida calcanhar glúteo (40s)", descanso: 40 },
                    { reps: "8", ex1: "Mesa Flexora", ex2: "Corrida calcanhar glúteo (40s)", descanso: 80 }
                ]
            },
            {
                tipo: "alongamento",
                titulo: "Alongamento (Foco Ísquios e Quadril)",
                corFundo: "bg-indigo-50 border-indigo-200",
                corBarra: "bg-indigo-500",
                series: [
                    { reps: "15m", ex1: "Soltura Ísquiotibiais e Rotação Torácica", descanso: 0 }
                ]
            }
        ]
    },
    "3": { // Quarta-feira
        diaNome: "Quarta-feira",
        foco: "Superiores, Cardio Metabólico e Abdômen",
        aquecimento: { nome: "Bicicleta ou Simulador de Escada", tempo: 10 },
        blocos: [
            {
                tipo: "biset",
                titulo: "Bi-set 1",
                corFundo: "bg-purple-50 border-purple-200",
                corBarra: "bg-purple-500",
                series: [
                    { reps: "15", ex1: "Puxada Alta", ex2: "Burpees ou Sprawls (10 rep)", descanso: 40 },
                    { reps: "12", ex1: "Puxada Alta", ex2: "Burpees ou Sprawls (10 rep)", descanso: 40 },
                    { reps: "10", ex1: "Puxada Alta", ex2: "Burpees ou Sprawls (10 rep)", descanso: 40 },
                    { reps: "8", ex1: "Puxada Alta", ex2: "Burpees ou Sprawls (10 rep)", descanso: 80 }
                ]
            },
            {
                tipo: "biset",
                titulo: "Bi-set 2",
                corFundo: "bg-pink-50 border-pink-200",
                corBarra: "bg-pink-500",
                series: [
                    { reps: "15", ex1: "Supino na Máquina", ex2: "Mountain Climbers (30s)", descanso: 40 },
                    { reps: "12", ex1: "Supino na Máquina", ex2: "Mountain Climbers (30s)", descanso: 40 },
                    { reps: "10", ex1: "Supino na Máquina", ex2: "Mountain Climbers (30s)", descanso: 40 },
                    { reps: "8", ex1: "Supino na Máquina", ex2: "Mountain Climbers (30s)", descanso: 80 }
                ]
            },
            {
                tipo: "biset",
                titulo: "Bi-set 3",
                corFundo: "bg-blue-50 border-blue-200",
                corBarra: "bg-blue-500",
                series: [
                    { reps: "15", ex1: "Desenvolvimento Ombros", ex2: "Corda Naval/Flexão (20s)", descanso: 40 },
                    { reps: "12", ex1: "Desenvolvimento Ombros", ex2: "Corda Naval/Flexão (20s)", descanso: 40 },
                    { reps: "10", ex1: "Desenvolvimento Ombros", ex2: "Corda Naval/Flexão (20s)", descanso: 40 },
                    { reps: "8", ex1: "Desenvolvimento Ombros", ex2: "Corda Naval/Flexão (20s)", descanso: 80 }
                ]
            },
            {
                tipo: "abdomen",
                titulo: "Abdômen",
                corFundo: "bg-emerald-50 border-emerald-200",
                corBarra: "bg-emerald-500",
                series: [
                    { reps: "15s", ex1: "Abdominal Vácuo", descanso: 40 },
                    { reps: "15s", ex1: "Abdominal Vácuo", descanso: 40 },
                    { reps: "15s", ex1: "Abdominal Vácuo", descanso: 40 },
                    { reps: "15s", ex1: "Abdominal Vácuo", descanso: 40 },
                    { reps: "15s", ex1: "Abdominal Vácuo", descanso: 80 },
                    { reps: "20", ex1: "Abdominal Bicicleta", descanso: 40 },
                    { reps: "20", ex1: "Abdominal Bicicleta", descanso: 40 },
                    { reps: "20", ex1: "Abdominal Bicicleta", descanso: 0 }
                ]
            }
        ]
    },
    "4": { // Quinta-feira
        diaNome: "Quinta-feira",
        foco: "Lateral de Coxas, Glúteo Médio e Alongamento",
        aquecimento: { nome: "Esteira ou Elíptico", tempo: 10 },
        blocos: [
            {
                tipo: "biset",
                titulo: "Bi-set 1",
                corFundo: "bg-purple-50 border-purple-200",
                corBarra: "bg-purple-500",
                series: [
                    { reps: "15", ex1: "Abdutora Tronco Inclinado", ex2: "Deslocamento Lateral (20 passos)", descanso: 40 },
                    { reps: "12", ex1: "Abdutora Tronco Inclinado", ex2: "Deslocamento Lateral (20 passos)", descanso: 40 },
                    { reps: "10", ex1: "Abdutora Tronco Inclinado", ex2: "Deslocamento Lateral (20 passos)", descanso: 40 },
                    { reps: "8", ex1: "Abdutora Tronco Inclinado", ex2: "Deslocamento Lateral (20 passos)", descanso: 80 }
                ]
            },
            {
                tipo: "biset",
                titulo: "Bi-set 2",
                corFundo: "bg-pink-50 border-pink-200",
                corBarra: "bg-pink-500",
                series: [
                    { reps: "15", ex1: "Glúteo Polia Baixa", ex2: "Agachamento Isométrico Parede (40s)", descanso: 40 },
                    { reps: "12", ex1: "Glúteo Polia Baixa", ex2: "Agachamento Isométrico Parede (40s)", descanso: 40 },
                    { reps: "10", ex1: "Glúteo Polia Baixa", ex2: "Agachamento Isométrico Parede (40s)", descanso: 40 },
                    { reps: "8", ex1: "Glúteo Polia Baixa", ex2: "Agachamento Isométrico Parede (40s)", descanso: 80 }
                ]
            },
            {
                tipo: "biset",
                titulo: "Bi-set 3",
                corFundo: "bg-blue-50 border-blue-200",
                corBarra: "bg-blue-500",
                series: [
                    { reps: "15", ex1: "Cadeira Adutora", ex2: "Prancha com Abdução Pernas (30s)", descanso: 40 },
                    { reps: "12", ex1: "Cadeira Adutora", ex2: "Prancha com Abdução Pernas (30s)", descanso: 40 },
                    { reps: "10", ex1: "Cadeira Adutora", ex2: "Prancha com Abdução Pernas (30s)", descanso: 40 },
                    { reps: "8", ex1: "Cadeira Adutora", ex2: "Prancha com Abdução Pernas (30s)", descanso: 80 }
                ]
            },
            {
                tipo: "alongamento",
                titulo: "Alongamento (Glúteos e Lombar)",
                corFundo: "bg-indigo-50 border-indigo-200",
                corBarra: "bg-indigo-500",
                series: [
                    { reps: "15m", ex1: "Soltura Gato-Camelo e Alongamento Lombar", descanso: 0 }
                ]
            }
        ]
    },
    "5": { // Sexta-feira
        diaNome: "Sexta-feira",
        foco: "Pernas Completas, Bumbum e Abdômen",
        aquecimento: { nome: "Simulador de Escada ou Bicicleta", tempo: 10 },
        blocos: [
            {
                tipo: "biset",
                titulo: "Bi-set 1",
                corFundo: "bg-purple-50 border-purple-200",
                corBarra: "bg-purple-500",
                series: [
                    { reps: "15", ex1: "Afundo no Smith/Búlgaro", ex2: "Saltos no Step/Caixa (10 rep)", descanso: 40 },
                    { reps: "12", ex1: "Afundo no Smith/Búlgaro", ex2: "Saltos no Step/Caixa (10 rep)", descanso: 40 },
                    { reps: "10", ex1: "Afundo no Smith/Búlgaro", ex2: "Saltos no Step/Caixa (10 rep)", descanso: 40 },
                    { reps: "8", ex1: "Afundo no Smith/Búlgaro", ex2: "Saltos no Step/Caixa (10 rep)", descanso: 80 }
                ]
            },
            {
                tipo: "biset",
                titulo: "Bi-set 2",
                corFundo: "bg-pink-50 border-pink-200",
                corBarra: "bg-pink-500",
                series: [
                    { reps: "15", ex1: "Elevação Pélvica Unilateral", ex2: "Frog Pump no solo (20 rep)", descanso: 40 },
                    { reps: "12", ex1: "Elevação Pélvica Unilateral", ex2: "Frog Pump no solo (20 rep)", descanso: 40 },
                    { reps: "10", ex1: "Elevação Pélvica Unilateral", ex2: "Frog Pump no solo (20 rep)", descanso: 40 },
                    { reps: "8", ex1: "Elevação Pélvica Unilateral", ex2: "Frog Pump no solo (20 rep)", descanso: 80 }
                ]
            },
            {
                tipo: "biset",
                titulo: "Bi-set 3",
                corFundo: "bg-blue-50 border-blue-200",
                corBarra: "bg-blue-500",
                series: [
                    { reps: "15", ex1: "Leg Press Pés Altos", ex2: "Agachamento Livre Rápido (20 rep)", descanso: 40 },
                    { reps: "12", ex1: "Leg Press Pés Altos", ex2: "Agachamento Livre Rápido (20 rep)", descanso: 40 },
                    { reps: "10", ex1: "Leg Press Pés Altos", ex2: "Agachamento Livre Rápido (20 rep)", descanso: 40 },
                    { reps: "8", ex1: "Leg Press Pés Altos", ex2: "Agachamento Livre Rápido (20 rep)", descanso: 80 }
                ]
            },
            {
                tipo: "abdomen",
                titulo: "Abdômen",
                corFundo: "bg-emerald-50 border-emerald-200",
                corBarra: "bg-emerald-500",
                series: [
                    { reps: "20s", ex1: "Abdominal Bracing (Isometria)", descanso: 40 },
                    { reps: "20s", ex1: "Abdominal Bracing (Isometria)", descanso: 40 },
                    { reps: "20s", ex1: "Abdominal Bracing (Isometria)", descanso: 40 },
                    { reps: "20s", ex1: "Abdominal Bracing (Isometria)", descanso: 40 },
                    { reps: "20s", ex1: "Abdominal Bracing (Isometria)", descanso: 80 },
                    { reps: "30s", ex1: "Prancha Lateral (Cada lado)", descanso: 40 },
                    { reps: "30s", ex1: "Prancha Lateral (Cada lado)", descanso: 40 },
                    { reps: "30s", ex1: "Prancha Lateral (Cada lado)", descanso: 0 }
                ]
            }
        ]
    }
};