import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const equipment = {
  grinders: [
    {
      id: 1,
      name: "Зернодробилка ЗД-500",
      image: "https://cdn.poehali.dev/projects/803dc324-518a-45f1-a734-ae40ac628083/files/d09098be-af64-43bc-9678-772d35b1d729.jpg",
      description: "Высокопроизводительная дробилка для крупного и мелкого помола зерна",
      specs: {
        power: "5.5 кВт",
        capacity: "500 кг/ч",
        weight: "180 кг"
      }
    },
    {
      id: 2,
      name: "Зернодробилка ЗД-1000",
      image: "https://cdn.poehali.dev/projects/803dc324-518a-45f1-a734-ae40ac628083/files/d09098be-af64-43bc-9678-772d35b1d729.jpg",
      description: "Промышленная дробилка повышенной мощности",
      specs: {
        power: "11 кВт",
        capacity: "1000 кг/ч",
        weight: "320 кг"
      }
    }
  ],
  conveyors: [
    {
      id: 3,
      name: "Зернопровод ЗП-100",
      image: "https://cdn.poehali.dev/projects/803dc324-518a-45f1-a734-ae40ac628083/files/d09098be-af64-43bc-9678-772d35b1d729.jpg",
      description: "Горизонтальный транспортер зерна для складских помещений",
      specs: {
        length: "6 м",
        capacity: "15 т/ч",
        diameter: "100 мм"
      }
    },
    {
      id: 4,
      name: "Зернопровод ЗП-150",
      image: "https://cdn.poehali.dev/projects/803dc324-518a-45f1-a734-ae40ac628083/files/d09098be-af64-43bc-9678-772d35b1d729.jpg",
      description: "Усиленный транспортер для интенсивных нагрузок",
      specs: {
        length: "12 м",
        capacity: "30 т/ч",
        diameter: "150 мм"
      }
    }
  ],
  elevators: [
    {
      id: 5,
      name: "Нория НЗ-50",
      image: "https://cdn.poehali.dev/projects/803dc324-518a-45f1-a734-ae40ac628083/files/8d9c3ba5-1352-4aab-947f-6916d67b12cb.jpg",
      description: "Вертикальный ковшовый элеватор для подъема зерна",
      specs: {
        height: "12 м",
        capacity: "50 т/ч",
        power: "7.5 кВт"
      }
    },
    {
      id: 6,
      name: "Нория НЗ-100",
      image: "https://cdn.poehali.dev/projects/803dc324-518a-45f1-a734-ae40ac628083/files/8d9c3ba5-1352-4aab-947f-6916d67b12cb.jpg",
      description: "Высокопроизводительный элеватор промышленного класса",
      specs: {
        height: "20 м",
        capacity: "100 т/ч",
        power: "15 кВт"
      }
    }
  ],
  cleaners: [
    {
      id: 7,
      name: "Сепаратор СЗ-20",
      image: "https://cdn.poehali.dev/projects/803dc324-518a-45f1-a734-ae40ac628083/files/7c48a40c-242b-4a31-8be4-101c6db3a596.jpg",
      description: "Зерноочистительная машина для первичной и вторичной очистки",
      specs: {
        capacity: "20 т/ч",
        power: "4 кВт",
        efficiency: "98%"
      }
    },
    {
      id: 8,
      name: "Сепаратор СЗ-50",
      image: "https://cdn.poehali.dev/projects/803dc324-518a-45f1-a734-ae40ac628083/files/7c48a40c-242b-4a31-8be4-101c6db3a596.jpg",
      description: "Высокопроизводительный сепаратор с воздушной системой",
      specs: {
        capacity: "50 т/ч",
        power: "11 кВт",
        efficiency: "99.5%"
      }
    }
  ]
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("grinders");

  const getEquipmentData = () => {
    switch(activeTab) {
      case "grinders": return equipment.grinders;
      case "conveyors": return equipment.conveyors;
      case "elevators": return equipment.elevators;
      case "cleaners": return equipment.cleaners;
      default: return [];
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary tracking-tight">АГРОПРОМТЕХ</h1>
              <p className="text-sm text-muted-foreground mt-1">Промышленное зерновое оборудование</p>
            </div>
            <Button variant="default" size="lg" className="bg-secondary hover:bg-secondary/90">
              <Icon name="Phone" className="mr-2" size={18} />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="bg-secondary text-secondary-foreground mb-4">
              Надежность • Качество • Технологии
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Профессиональное оборудование для переработки зерна
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-6">
              Полный цикл зернопереработки: от очистки до транспортировки. 
              Надежное промышленное оборудование с гарантией качества.
            </p>
            <div className="flex flex-wrap gap-8 mt-8">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={24} className="text-secondary" />
                <span className="font-medium">15+ лет опыта</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={24} className="text-secondary" />
                <span className="font-medium">Сертификация ISO</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Wrench" size={24} className="text-secondary" />
                <span className="font-medium">Гарантия 3 года</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Каталог оборудования</h2>
          <p className="text-muted-foreground">Выберите категорию для просмотра технических характеристик</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-muted/50 p-2">
            <TabsTrigger value="grinders" className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              <Icon name="Cog" size={24} />
              <span className="font-medium">Зернодробилки</span>
            </TabsTrigger>
            <TabsTrigger value="conveyors" className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              <Icon name="Move" size={24} />
              <span className="font-medium">Зернопроводы</span>
            </TabsTrigger>
            <TabsTrigger value="elevators" className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              <Icon name="ArrowUpCircle" size={24} />
              <span className="font-medium">Нории</span>
            </TabsTrigger>
            <TabsTrigger value="cleaners" className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              <Icon name="Filter" size={24} />
              <span className="font-medium">Сепараторы</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {getEquipmentData().map((item) => (
                <Card key={item.id} className="overflow-hidden border-2 hover:border-secondary transition-colors duration-300">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{item.name}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        Технические характеристики
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {Object.entries(item.specs).map(([key, value]) => (
                          <div key={key} className="bg-muted/50 p-3 rounded">
                            <div className="text-xs text-muted-foreground uppercase mb-1">
                              {key === 'power' && 'Мощность'}
                              {key === 'capacity' && 'Производ.'}
                              {key === 'weight' && 'Вес'}
                              {key === 'length' && 'Длина'}
                              {key === 'diameter' && 'Диаметр'}
                              {key === 'height' && 'Высота'}
                              {key === 'efficiency' && 'КПД'}
                            </div>
                            <div className="text-sm font-bold text-foreground">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Получить консультацию
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Доставка по России</h3>
              <p className="text-muted-foreground">Организуем доставку в любой регион</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Монтаж и пусконаладка</h3>
              <p className="text-muted-foreground">Установка под ключ силами специалистов</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="HeadphonesIcon" size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Техподдержка 24/7</h3>
              <p className="text-muted-foreground">Консультации и сервисное обслуживание</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-bold">АГРОПРОМТЕХ</h3>
              <p className="text-sm text-primary-foreground/70">Промышленное зерновое оборудование</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Icon name="Mail" className="mr-2" size={16} />
                info@agropromtech.ru
              </Button>
              <Button variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Icon name="Phone" className="mr-2" size={16} />
                +7 (800) 555-35-35
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
