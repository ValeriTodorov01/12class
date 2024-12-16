Какво е bean - java class, управляван от Spring IoC контейнер.

1. @Component
2. @Configuration and @Bean


Инжектиране на dependency-та - внедряване на обекти в други обекти.
През Конструктор, през Setter, през полета.
Най-добрият начин е през конструктора
После е Setter
и накрая е field с @Autowired


@Value - за да вземем стойност от application.properties

SOLID - 
- Single responsibility for single object
- interface segregation
- 
Open-closed, Liskov substitution, Interface segregation, Dependency inversion

@Qualifier - за да кажем кой бийн да вземе. Aко имаме 2 бийна с еднакво име заради интерфейса, се слагат @Qualifier("name") или Primary, за да се каже кой да се вземе, но Qualifier е с предимство

localhost:8080/hello?name=Ivan
@Requestparam - за да вземем параметър от заявката za name=Ivan
@PathVariable - за да вземем параметър от пътя /hello
