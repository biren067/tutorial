import React from 'react'

function ModelQueries() {
  return (
    <div>
        <li>django does not hit the database, until one explicitly call save() method.</li>
        <li>First create a instance of model class and then call save() method to save in database</li>
        <li>use create() method to just save instance/record directly to database</li>
        <li> Updating a record by using same instance
            <ul className='pl-10'>
                <li>from blog.models import Blog, Entry</li>
                <li>entry = Entry.objects.get(pk=1)</li>
                <li>cheese_blog = Blog.objects.get(name="Cheddar Talk")</li>
                <li>entry.blog = cheese_blog</li>
                <li>entry.save()</li>
            </ul>
        </li>
        <li> Updating a Field on ManyToManyField is by using add() method
            <ul className='pl-10'>
                <li> from blog.models import Author</li>
                <li> joe = Author.objects.create(name="Joe")</li>
                <li> entry = Entry.objects.get(pk=1)</li>
                <li> entry.authors.add(joe)</li>
                
            </ul>
        </li>
        <li> Updating a Field on ManyToManyField with number of argument.
            <ul className='pl-10'>
                <li> entry.authors.add(john, paul, george, ringo)</li>        
            </ul>
        </li>
        <li>Chaining Filter
            <ul className='pl-10' style={{listStyleType:'circle'}}>
                <li> The result of refining a QuerySet is itself a QuerySet.</li>
                <li> Means, Result of one queryset is a queryset.</li>
                <ul style={{listStyleType:'circle'}}>
                    <li>Entry.objects.filter(headline__startswith="What")
                        .exclude(pub_date__gte=datetime.date.today())
                        .filter(pub_date__gte=datetime.date(2005, 1, 30))</li>
                </ul>        
            </ul>
        </li>
        <li>Django Queries
            <ul className='pl-10' style={{listStyleType:'circle'}}>
                <li> Entry.objects.filter(pub_date__year=2006)</li>
                <li> filter(**kwargs)
                    <p>Returns a new QuerySet containing objects that match the given lookup parameters.</p>
                </li>
                <li>exclude(**kwargs)
                    <p>Returns a new QuerySet containing objects that do not match the given lookup parameters.</p>
                </li>
                <li> q1 = Entry.objects.filter(headline__startswith="What")</li>
                <li> q2 = q1.exclude(pub_date__gte=datetime.date.today())</li>
                <li> q3 = q1.filter(pub_date__gte=datetime.date.today())</li>        
            </ul>
        </li>
        <li>QuerySet are lazy
            <ul className='pl-10' style={{listStyleType:'circle'}}>
                <li> the act of creating a QuerySet doesn’t involve any database activity. You can stack filters together all day long, and Django won’t actually run the query until the QuerySet is evaluated
                </li>
                <li> print(q), will hit the database. Below command will only work on model not on database.
                    <p>q = Entry.objects.filter(headline__startswith="What")<br/>
                        q = q.filter(pub_date__lte=datetime.date.today())<br/>
                        q = q.exclude(body_text__icontains="food")
                    </p>
                </li>

            </ul>
        </li>        
        
    </div>
  )
}

export default ModelQueries