# test_mobile

Особенности:
* Приложение работает с локальным сервером (npm start server), потому что удалённый указанный в задании не отвечает
* Весрия для ios запускается и исполняется в эмуляторе
* Весрия для android не работает. Требует защищенное соединение, поэтому не подключается к серверу (для решения можно получить сертификат certbot и настроить всё локально, для этого нужно пару часов)
* Было искушение просто сделать за час один компонент который сам работает с сокетами и обновляется через собственный state, но принял самостоятельное решение использовать redux, saga и прочее. Хотя при данном ТЗ считаю это немного излишним

Следующие возможные  шаги по оптимизации:
* Вынести компоненты рендеринга списка отдельно, например в UIKit
* Было бы удобно если бы при нажатии на текущий раскрытый список он просто закрывался
* Сделать список так чтобы элементы первого уровня всегда были видны на экране, а скроллинг работал во вложенном списке

Затрачено около 4-5 часов
