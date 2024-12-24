let dados = [
    {
        nome : "Sistema de Informação ",
        descricao : "A Faculdade de Sistemas de Informação é a porta de entrada para um universo de possibilidades na era digital. Ao longo do curso, os estudantes adquirem conhecimentos sólidos em programação, bancos de dados, redes de computadores e gestão de projetos, desenvolvendo habilidades essenciais para criar e gerenciar soluções tecnológicas inovadoras.",
        link : "https://querobolsa.com.br/cursos-e-faculdades/sistemas-de-informacao",
        tags : "Faculdade Curso faculdade curso sistema Sistemas Sistema sistemas informaçao informação informacao Informaçao Informação"
    },

    {
        nome : "Ciência da Computação",
        descricao : "A Faculade de Ciência da Computação é a base para a inovação tecnológica. O curso explora os fundamentos teóricos da computação, desde algoritmos e estruturas de dados até inteligência artificial e teoria da computação. Os graduados em Ciência da Computação são capazes de desenvolver soluções computacionais complexas, conduzir pesquisas e impulsionar a evolução da tecnologia.",
        link : "https://querobolsa.com.br/cursos-e-faculdades/ciencia-da-computacao",
        tags : "Faculdade Curso faculdade curso ciencia Ciencia computador computaçao Computaçao computacao Computacao"
      },
      
      {
        nome: "Engenharia de Software",
        descricao: "A Faculade de  Engenharia de Software transforma ideias em software de alta qualidade. O curso ensina os princípios e práticas para projetar, desenvolver, testar e implantar sistemas de software de forma eficiente e confiável. Engenheiros de software são profissionais indispensáveis para o desenvolvimento de aplicações, sistemas operacionais e outras soluções de software que moldam o mundo digital.",
        link: "https://querobolsa.com.br/cursos-e-faculdades/engenharia-de-software",
        tags : "Faculdade Curso faculdade curso engenharia soft Soft"
      },
      // LIVRO
      {
        nome: "Introção a Sistema de Informação",
        descricao:"O livro: Introção a Sistema de Informação e uma introdução aos conceitos fundamentais de sistemas de informação, explorando hardware, software, redes e banco de dados.",
        link:"https://www.amazon.com.br/Introdu%C3%A7%C3%A3o-Sistemas-Informa%C3%A7%C3%A3o-Transformando-Mobilidade/dp/8535277404",
        tags:"Livro livro sistemas de informação  tecnologia da informação  TI  gestão da informação   banco de dados  sistemas, informação  conhecimento organização negócios 8535242058  Kelly Rainer  Carl S. Cegielski Didático Pearson Education do Brasil 2012 isbn ISBN Autor autor publicacao publicaçao Publicacao Publicaçao publicacão publicação Publicacão Publicação genero Gênero Genero gênero editora Editora ",
      },

      {
        nome: "A Era da Inteligência Artificial",
        descricao: "O livro: A Era da Inteligência Artificial e uma análise aprofundada do impacto da inteligência artificial na sociedade, explorando seus benefícios, desafios e implicações éticas.",
        link: "https://www.amazon.com.br/Era-Intelig%C3%AAncia-Artificial-futuro-humano/dp/9722073400",
        tags: "Livro livro inteligência artificial IA futuro tecnologia sociedade ética política economia robótica futurologia história da humanidade evolução humana revolução cognitiva 978-85-42-12919-1 Henry Kissinger Não-ficção Intrinseca 2021"
    },

    {
        nome: "Sapiens: Uma Breve História da Humanidade",
        descricao: "O livro: Sapiens: Uma Breve História da Humanidade e uma jornada pela história da humanidade, desde os primeiros hominídeos até a era moderna, explorando os fatores que moldaram nossa espécie.",
        link:"https://www.amazon.com.br/Sapiens-Uma-Breve-Hist%C3%B3ria-Humanidade/dp/8525432180",
        tags: "Livro livro história da humanidade evolução humana revolução científica sociedade cultura espécie humana sapiens homosapiens tecnologia 978-85-75-42577-5 Yuval Noah Harari História L&PM Pocket 2014"
    },

    {
        nome: "Steve Jobs",
        descricao: "O livro: Steve Jobs e uma biografia autorizada de Steve Jobs, fundador da Apple, que explora sua vida, carreira e legado.",
        link: "https://www.amazon.com/Steve-Jobs-Biografia-Portugues-Brasil/dp/8535919716",
        tags: "Livro livro steve jobs apple inovação liderança biografia tecnologia design empreendedorismo história da tecnologia marketing 978-85-35-21643-2 Walter Isaacson Biografia BestSeller 2011"
    },

    {
        nome: "O Algoritmo",
        descricao: "O livro: O Algoritmo e uma exploração dos algoritmos que moldam nosso mundo digital, desde as redes sociais até os motores de busca.",
        link: "./pagindisponivel.html",
        tags: "Livro livro algoritmo tecnologia sociedade privacidade dados internet inteligência artificial futuro controle 978-85-75-42474-7 Clifford Stoll Não-ficção L&PM Pocket 2018",
    },
    // FILME
    {
      nome: "O Jogo da Imitação",
      descricao: "Baseado na história real de Alan Turing, um gênio da matemática que liderou uma equipe para decifrar a máquina Enigma, utilizada pelos nazistas para codificar mensagens. O filme retrata os desafios e dilemas de Turing durante a Segunda Guerra Mundial, além de explorar temas como homossexualidade e preconceito.",
      link: "./pagindisponivel.html",
      tags:" Segunda Guerra Mundial Criptografia Inteligência Artificial Alan Turing História Real Drama Biográfico Drama histórico biográfico",
    },

    {
      nome: "A Rede Social",
      descricao: "Uma dramatização da criação do Facebook, lançado em 2010 focando na história de Mark Zuckerberg e nas disputas legais e éticas que cercaram o nascimento da maior rede social do mundo. O filme explora temas como ambição, amizade, e os impactos da tecnologia na sociedade.",
      link: "./pagindisponivel.html",
      tags: "Facebook Mark Zuckerberg Redes Sociais Empreendedorismo Drama Tecnologia",
    },

    {
      nome: "Piratas do Vale do Silício",
      descricao: "Um filme biográfico que retrata a rivalidade entre Steve Jobs e Bill Gates, os fundadores da Apple e da Microsoft, respectivamente. Foi lançado em 1999, A trama acompanha a ascensão dessas duas empresas e a revolução tecnológica que elas impulsionaram.",
      link: "./pagindisponivel.html",
      tags: "História da Tecnologia Steve Jobs Bill Gates Apple Microsoft Guerra dos Computadores Biografia",
    },

    {
      nome: " Ela",
      descricao: "Um homem se apaixona por um sistema operacional com inteligência artificial, explorando temas como solidão, amor e a natureza da consciência. Lançado em 2013, o filme levanta questionamentos sobre o futuro da tecnologia e a possibilidade de relacionamentos com máquinas.",
      link: "./pagindisponivel.html",
      tags: "Inteligência Artificial Relação Homem-Máquina Futuro Ciência Ficção Drama Romântico",
    },

    {
      nome: "Matrix",
      descricao: "Um clássico da ficção científica que apresenta um mundo onde a realidade é uma simulação criada por máquinas. Foi lançado em 1999, o filme explora temas como livre arbítrio, a natureza da realidade e a luta pela libertação.",
      link: "./pagindisponivel.html",
      tags: "Realidade Virtual Inteligência Artificial Filosofia Ação Ciência Ficção Neo",
    },
    // LINGUAGENS DE PROGRAMAÇÃO
    {
      nome: "Python",
      descricao: "Python é uma linguagem de programação de alto nível, conhecida por sua sintaxe clara e legível. É amplamente utilizada em diversas áreas, como desenvolvimento web, ciência de dados, machine learning e automação. Sua comunidade ativa e vasta biblioteca de módulos contribuem para sua versatilidade.",
      link: "https://www.python.org/",
      tags: "Python programação linguagem python linguagem de programação desenvolvimento web ciência de dados machine learning"
  },

  {
      nome: "JavaScript",
      descricao: "JavaScript é a linguagem padrão para desenvolvimento web front-end. É utilizada para criar interfaces dinâmicas e interativas em páginas da web. Com o Node.js, JavaScript também pode ser utilizado para desenvolver aplicações back-end. (Inclusive este site foi desenvolvido em conjunto com HTML e CSS.)",
      link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      tags: "JavaScript programação linguagem javascript desenvolvimento web front-end back-end Node.js"
  },
  
  {
      nome: "Java",
      descricao: "Java é uma linguagem de programação orientada a objetos, robusta e portável. É amplamente utilizada no desenvolvimento de aplicações empresariais, aplicativos Android e sistemas distribuídos. A máquina virtual Java (JVM) permite que programas Java sejam executados em diferentes plataformas.",
      link: "https://www.oracle.com/java/",
      tags: "Java programação linguagem java desenvolvimento de software orientação a objetos JVM Android"
  },

  {
      nome: "C#",
      descricao: "C# é uma linguagem de programação orientada a objetos desenvolvida pela Microsoft. É utilizada principalmente para o desenvolvimento de aplicações .NET, jogos e aplicativos móveis. C# é conhecida por sua integração com o framework .NET e sua performance.",
      link: "https://docs.microsoft.com/pt-br/dotnet/csharp/",
      tags: "C# programação linguagem c# desenvolvimento .NET orientação a objetos jogos aplicativos móveis"
  },
  
  {
      nome: "C++",
      descricao: "C++ é uma linguagem de programação de alto nível, com características de baixo nível. É utilizada para desenvolver softwares de alto desempenho, jogos, sistemas operacionais e aplicativos que exigem controle preciso sobre a memória. C++ é uma extensão da linguagem C.",
      link: "https://www.cplusplus.com/",
      tags: "C++ programação linguagem c++ desenvolvimento de software alto desempenho jogos sistemas operacionais"
  }
]

