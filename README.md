# Safety Condition Tracker – Activity Provider (Inven!RA)

Este projeto corresponde ao desenvolvimento de um **Activity Provider** para a arquitetura **Inven!RA**, no âmbito da unidade curricular **Arquitetura e Padrões de Software**.

O *Safety Condition Tracker* tem como objetivo permitir o registo e acompanhamento de condições inseguras observadas no terreno, disponibilizando dados analíticos à plataforma Inven!RA para monitorização e avaliação das atividades.

---

## Arquitetura e Padrões Utilizados

Ao longo do projeto foram aplicados diferentes padrões de software, conforme os tópicos da unidade curricular:

###  Padrão de Criação
- **Factory Method**  
  Utilizado para a criação dos diferentes tipos de relatórios de segurança (ex.: *Hazard*, *Near Miss*), encapsulando a lógica de criação e validação dos objetos.

### Padrão de Estrutura
- **Facade**  
  Implementado através do `ReportSubmissionFacade`, simplificando a interação entre o controlador REST e os componentes internos do sistema.

###  Padrão de Comportamento
- **Strategy**  
  Utilizado para a avaliação de risco associada aos relatórios, permitindo variar o algoritmo de avaliação sem alterar o fluxo principal do sistema.

###  Antipadrões e Refatorização
- Foi identificado um risco de ocorrência do antipadrão **The Blob** no *Facade*.  
- A refatorização consistiu na extração da lógica de avaliação de risco para um serviço dedicado (`RiskAssessmentService`), redistribuindo responsabilidades e melhorando a modularidade do sistema.

---

## Estrutura do Projeto
├─ index.js
├─ facades/
│ └─ ReportSubmissionFacade.js
├─ services/
│ └─ RiskAssessmentService.js
├─ strategies/
│ ├─ RiskAssessmentStrategy.js
│ ├─ SimpleRiskStrategy.js
│ └─ SeverityBasedRiskStrategy.js
├─ factories/
│ ├─ ReportFactory.js
│ ├─ HazardReportFactory.js
│ └─ NearMissReportFactory.js
├─ processors/
│ └─ ConditionProcessor.js
├─ models/
│ ├─ Report.js
│ ├─ HazardReport.js
│ └─ NearMissReport.js
└─ package.json



---

## Endpoints Implementados

O serviço disponibiliza os seguintes endpoints REST, de acordo com a especificação da Inven!RA:

- `GET /` – Verificação do estado do serviço  
- `GET /json-params` – Parâmetros de configuração da atividade  
- `POST /deploy` – Submissão e processamento de relatórios  
- `GET /analytics` – Dados analíticos de exemplo  

---

## Execução do Projeto

### Pré-requisitos
- Node.js (v18 ou superior)
- npm

### Instalação e execução
```bash
npm install
npm start

O serviço ficará disponível na porta definida pela variável de ambiente PORT ou, por omissão, na porta 3000.
````

Contexto Académico

Este projeto foi desenvolvido exclusivamente para fins académicos, como parte da avaliação prática da unidade curricular Arquitetura e Padrões de Software, no curso de Mestrado em Engenharia Informática e Tecnologia Web.

Autor: Bernardo Massango

