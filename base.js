<script type='text/javascript'>
            var blogurl = &#39;<data:blog.homepageUrl/>&#39;;
            //<![CDATA[
            $j = jQuery.noConflict();
            $j(document).ready(function () {
                $j('#topMenu li a').each(function (i) {
                    var lt = $j(this).text().toLowerCase();
                    var la = $j(this).attr('href').toLowerCase();
                    var emailr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
                    var email2r = /^mailto:.*$/i;
                    var telr = /[\d\s+-]{5,}/;
                    var telr2 = /^tel:.*$/;
                    if (emailr.test(lt) || email2r.test(la)) {
                        $j(this).prepend('<i class="fa fa-envelope-o" aria-hidden="true"></i> ');
                    } else if (telr.test(lt) || telr2.test(la)) {
                        $j(this).prepend('<i class="fa fa-phone" aria-hidden="true"></i> ');
                    } else if (la.indexOf('map') !== -1 || lt.indexOf('map') !== -1) {
                        $j(this).prepend('<i class="fa fa-map-marker" aria-hidden="true"></i> ');
                    }
                });
                var headerBackground = $j('#header-wrapper .Image img');
                var header = $j('#bt-header');
                if (headerBackground.length > 0) {
                    var headerImage = headerBackground.attr('src');
                    header.css({'background-image': 'url("' + headerImage + '")'});
                }
                var blogTitle = $j('h1.title');
                var index = blogTitle.text().indexOf(' ');
                if( index !== -1 )
                    blogTitle.html( '<a href="'+blogurl+'"><span class="first-word">' +
                        blogTitle.text().substring(0, index) + '</span>' + blogTitle.text().substring(index, blogTitle.text().lenght) )+'</a>';
                var stickyNavigation = $j('#btemplates-main-menu');
                var header = $j('#btemplates-dropdown-2').height();
                $j(window).scroll(function() {
                  if( $j(this).scrollTop() > header ) {
                    stickyNavigation.addClass('sticky');
                  } else {
                    stickyNavigation.removeClass('sticky');
                  }
                });
                var btBlocks = $j('#blocksMainMenu');
                var blocksMenuElements = $j('#blocksMainMenu .LinkList li');
                var blocksMenuUl = $j('#blocksMainMenu .LinkList ul');
                var defaultColors = [ '#114669', '#42CBDB', '#B84030', '#BD4E3F', '#E6A10E', '#F0BC0D',
                 '#F0BC0D', '#E6A10E', '#BD4E3F', '#B84030', '#42CBDB', '#114669'];
                var re = new RegExp('^.*#(\w{6})$', 'i');
                blocksMenuElements.each(function(i){
                    var la = $j(this).attr('href');
                    var currentL = $j(this);
                    currentL.replaceWith( '<div id="block-'+i+
                    '" class="bt-block d-flex justify-content-center align-items-center col-6 col-sm-4 col-lg-2" style="background-color: '+
                    defaultColors[i]+';">'+currentL.html()+'</div>');
                    $j('#block-'+i).height( $j('#block-'+i).width() );
                    if( i == blocksMenuElements.length-1 )
                        blocksMenuUl.replaceWith('<div class="row justify-content-center">'+blocksMenuUl.html()+'</div>');
                });
                $j('body').on('click', '.bt-block', function(){
                    window.location.href = $j(this).find('a').attr('href');
                });
                $j('#content-1').css('background-image', 'url('+$j('#sectionsLabels .Image img').attr('src')+')');
                $j('#bt-subscription').css('background-image', 'url('+$j('#emailSubscription .Image img').attr('src')+')');
                $j('#bt-videos').css('background-image', 'url('+$j('#latestVideo .Image img').attr('src')+')');
                $j('#bt-contact h2, #portfolio-footer h2').after('<hr class="title-separator mb-4">');
                $j('#bt-contact input, #bt-contact textarea, #emailSubscription .follow-by-email-address').addClass('form-control').wrap('<div class="input-group"></div>');
                $j('#bt-contact .contact-form-name').before('<div class="input-group-prepend"><div class="input-group-text"><i class="fa fa-user-o" aria-hidden="true"></i></div></div>');
                $j('#bt-contact .contact-form-email, #emailSubscription .follow-by-email-address').before('<div class="input-group-prepend"><div class="input-group-text"><i class="fa fa-envelope-open-o" aria-hidden="true"></i></div></div>');
                var popularPosts = $j('#btemplates-popular-posts .PopularPosts ul li .item-content, #btemplates-icons-menu .PopularPosts ul li .item-thumbnail-only');var ajaxSupport = !![];
                if (popularPosts.length) {
                    var postHTML = '';
                    popularPosts.each(function () {
                        var pThumb = $j(this).find('.item-thumbnail img');
                        var pThumbSize = '285';
                        if (pThumb.length > 0) {
                            pThumb = pThumb.attr('src');
                            pThumb = pThumb.replace('w72-h72-p-k-no-nu', 'w' + pThumbSize + '-h' + pThumbSize + '-p-k-no-nu').replace('w72-h72-n-k-no-nu', 'w' + pThumbSize + '-h' + pThumbSize + '-n-k-no-nu');
                        } else {
                            pThumb = 'https://1.bp.blogspot.com/-OoP4sWGVriY/XPBuyFZuqyI/AAAAAAAABGI/F3CU_cugs1ozET0Wl6ijZrNcvwJzupbcgCLcBGAs/w285-h285-p-k-no-nu/post-image.png';
                        }
                        var pTitle = $j(this).find('.item-title a').text();
                        var pLink = $j(this).find('.item-title a').attr('href');
                        postHTML += '<div class="col-6 col-md-3">' +
                                '<div class="item">' +
                                '<a href="' + pLink + '">' +
                                '<img src="' + pThumb + '" width="' + pThumbSize + 'px" alt="' + pTitle + ' image"/>' +
                                '</a>' +
                                '<div class="item-title">' +
                                '<a href="' + pLink + '">' +
                                '<h3>' + pTitle + '</h3>' +
                                '</a>' +
                                '</div>' +
                                '</div>' +
                                '</div>';
                    });
                    postHTML = '<div class="btemplates-portfolio"><div class="row no-gutters">' + postHTML + '</div></div>';
                    $j('#btemplates-popular-posts .PopularPosts .widget-content ul').replaceWith(postHTML);
                    $j('#btemplates-popular-posts .PopularPosts').show();
                }
                var firstPostContent = $j('#btemplates-first-post .widget');
                if (firstPostContent.length) {
                    var firstPostContent = $j('#btemplates-first-post').html();
                    var firstPost = $j('#main-wrapper .post:first');
                    firstPost.after('<div id="btemplates-first-post-c">' + firstPostContent + '</div>');
                }
                var ProfileImage = $j('.Profile > div:nth-child(2) > a:nth-child(1) img');
                if (ProfileImage.length) {
                    ProfileImage.attr('src', $j('.Profile > div:nth-child(2) > a:nth-child(1) img').attr('src').replace('s80', 's125')).attr('width', '125').attr('height', '125');
                    ProfileImage.addClass('rounded-circle border border-secondary');
                }
                if ($j('.widget').length) {
                    $j('.widget').each(function (index) {
                        var widgetTitle = $j(this).children('h2').text();
                        var regDescription = /(.*?)-desc:(.*?)$/i;
                        if (regDescription.exec(widgetTitle)) {
                            var widgetSettings = widgetTitle.match(regDescription);
                            var title = widgetSettings[1];
                            var description = widgetSettings[2];
                            $j(this).children('h2').text(title);
                            $j(this).children('h2').after('<p class="bt-widget-description">' + description + '</p>');
                        }
                    });
                }
                if ($j('.avatar-image-container').length) {
                    $j('.avatar-image-container img').each(function () {
                        $j(this).addClass('rounded-circle border border-secondary');
                        if ($j(this).attr('src').indexOf('blogblog.com/img/blank.gif') !== -1) {
                            $j(this).attr('src', 'https://3.bp.blogspot.com/-qnvargRhquo/XSJ9VCaxZ4I/AAAAAAAABNU/f5c-lN4M9dIl3Wr87zT_guszgZY9RDe6gCLcBGAs/s35/user.png');
                        }
                    })
                }
                if ($j('.comment-reply').length)
                    $j('.comment-reply').addClass('btn text-white mr-2 p-1');
                $j('span.blog-author').html('<i class="fa fa-user-o" aria-hidden="true" title="Author"></i>');
                $j('.post-body iframe, .post-body embed, .post-body object').wrap('<div class="video-container"></div>');
                $j('.Label li span').each(function (i) {
                    $j(this).text($j(this).text().replace('(', '').replace(')', ''));
                    if ($j.isNumeric($j(this).text()) && $j(this).parent().children().length > 1) {
                        $j(this).addClass('rounded-circle border border-secondary text-center float-right');
                        var link = $j(this).prev().attr('href');
                        if (link !== undefined)
                            $j(this).wrap('<a href="' + link + '"></a>');
                    }
                });
                $j('#btemplates-social li a').each(function () {
                    var la = $j(this).attr('href').toLowerCase();
                    var socialNetworks = ['500px', 'amazon', 'android', 'angellist', 'apple', 'bandcamp', 'behance', 'bitbucket', 'bitcoin', 'bluetooth', 'buysellads', 'chrome', 'codepen', 'deviantart', 'digg', 'dribbble', 'dropbox', 'drupal', 'etsy', 'facebook', 'firefox', 'flickr', 'foursquare', 'github', 'gitlab', 'google', 'imdb', 'instagram', 'joomla', 'linkedin', 'linode', 'linux', 'medium', 'meetup', 'opencart', 'openid', 'opera', 'paypal', 'pinterest', 'qq', 'quora', 'reddit', 'renren', 'scribd', 'skype', 'slideshare', 'snapchat', 'soundcloud', 'spotify', 'steam', 'telegram', 'tripadvisor', 'tumblr', 'twitch', 'twitter', 'vimeo', 'wechat', 'weibo', 'weixin', 'whatsapp', 'wikipedia', 'windows', 'wordpress', 'yahoo', 'yelp', 'youtube'];
                    var currentLink = $j(this);
                    $j.each(socialNetworks, function (i, sn) {
                        if (la.indexOf(sn) !== -1 && ajaxSupport) {
                            currentLink.html('<i class="fa fa-' + sn + '" aria-hidden="true"></i>');
                            return false;
                        }
                    });
                });
                $j('#sidebar .LinkList li a, #footers .LinkList li a').each(function () {
                    var la = $j(this).attr('href').toLowerCase();
                    var socialNetworks = ['500px', 'amazon', 'android', 'angellist', 'apple', 'bandcamp', 'behance', 'bitbucket', 'bitcoin', 'bluetooth', 'buysellads', 'chrome', 'codepen', 'deviantart', 'digg', 'dribbble', 'dropbox', 'drupal', 'etsy', 'facebook', 'firefox', 'flickr', 'foursquare', 'github', 'gitlab', 'google', 'imdb', 'instagram', 'joomla', 'linkedin', 'linode', 'linux', 'medium', 'meetup', 'opencart', 'openid', 'opera', 'paypal', 'pinterest', 'qq', 'quora', 'reddit', 'renren', 'scribd', 'skype', 'slideshare', 'snapchat', 'soundcloud', 'spotify', 'steam', 'telegram', 'tripadvisor', 'tumblr', 'twitch', 'twitter', 'vimeo', 'wechat', 'weibo', 'weixin', 'whatsapp', 'wikipedia', 'windows', 'wordpress', 'yahoo', 'yelp', 'youtube'];
                    var currentLink = $j(this);
                    $j.each(socialNetworks, function (i, sn) {
                        if (la.indexOf(sn) !== -1 && ajaxSupport) {
                            currentLink.html('<i class="fa fa-' + sn + '  d-flex justify-content-center align-items-center" aria-hidden="true"></i>');
                            currentLink.parent().replaceWith(currentLink);
                            return false;
                        }
                    });
                });
                $j('.LinkList a, .Text a, .Image a, .post-body a').each(function () {
                    var hashlink = $j(this).attr('href');
                    if( typeof hashlink !== typeof undefined && hashlink !== false ) {
                        if (hashlink.indexOf('#bt-tags') !== -1) {
                            $j(this).attr({'data-toggle': 'modal', 'data-target': '#bt-labels'});
                        } else if(hashlink.indexOf('#bt-home') !== -1){
                            $j(this).attr('href', blogurl);
                        }
                    }
                });
                $j('.widget.Label').each(function () {
                    var re = /^.*-BTLabels$/i;
                    var widgetTitle = $j(this).find('h2');
                    if (re.test(widgetTitle.text())) {
                        widgetTitle.text(widgetTitle.text().replace('-BTLabels', ''));
                        var list = $j(this).find('ul');
                        list.replaceWith('<hr class="title-separator"/><div class="btemplates-tags">' + list.html() + '</div>');
                        $j(this).find('li').each(function () {
                            var link = $j(this).find('a');
                            if (link.length)
                                var tag = link.eq(0).text();
                            else if ($j(this).find('span').length)
                                var tag = $j(this).find('span').eq(0).text();
                            btemplatesGetTagThumbJquery($j(this), tag);
                        });
                    }
                });
                function btemplatesGetTagThumbJquery(el, tag) {
                    var encodedTag = encodeURI(tag);
                    $j.get(blogurl + 'feeds/posts/default/-/' + encodedTag + '?alt=json&max-results=5', function (data) {
                        if ('entry' in data.feed) {
                            var finalThumb = 'https://1.bp.blogspot.com/-OoP4sWGVriY/XPBuyFZuqyI/AAAAAAAABGI/F3CU_cugs1ozET0Wl6ijZrNcvwJzupbcgCLcBGAs/s300-c/post-image.png';
                            var lastTagTitle = '';
                            var imagesRegex = /https?:\/\/[^\s\#\?]*\.(jpe?g|gif|png)/ig;
                            for (var i = 0; i < data.feed.entry.length; i++) {
                                var images = data.feed.entry[i].content.$t.match(imagesRegex);
                                if( images !== null && images.length > 0 ){
                                    thumb = images[0].replace(/(https?:\/\/[^\s\#\?]*\/)(s\d+|w\d+-h\d+|w\d+)(\/[^\s\#\?\/]*\.)(jpe?g|png|gif)/i, function(match, g1, g2, g3, g4){return g1+'s100-c'+g3+g4});
                                        if (el.closest('.btemplates-tags').html().indexOf(thumb) === -1) {
                                            finalThumb = thumb;
                                            break;
                                        }
                                } else if ('media$thumbnail' in data.feed.entry[i]) {
                                    var rawThumbnail = data.feed.entry[i].media$thumbnail;
                                    var youTubePreviewRegex = /img\.youtube\.com\/vi\/.*\/default\.jpg/i;
                                    if(youTubePreviewRegex.test(rawThumbnail.url)){
                                        rawThumbnail  = rawThumbnail.url.replace('default.jpg', 'maxresdefault.jpg');
                                    } else {
                                        rawThumbnail = rawThumbnail.url.replace('s72-c', 'w' + 's100-c');
                                    }
                                    if (el.closest('.btemplates-tags').html().indexOf(rawThumbnail) === -1) {
                                        finalThumb = rawThumbnail;
                                        break;
                                    }
                                }
                            }
                            for (var j = 0; j < data.feed.entry.length; j++) {
                                if ('title' in data.feed.entry[j]) {
                                    lastTagTitle = data.feed.entry[j].title.$t;
                                }
                            }
                            var tagUrl = blogurl+'search/label/'+encodedTag;
                            el.replaceWith('<a href="' + tagUrl + '" ' +
                                    'class="bt-tag" title="' + tag + ': ' + lastTagTitle + '">' +
                                    '<div class="tag-thumb d-flex justify-content-center align-items-center">' +
                                    '<img class="rounded-circle" src="' + finalThumb + '" />' +
                                    '</div>' +
                                    '<h4>' + tag + '</h4>' +
                                    '</a>');
                            return finalThumb;
                        }
                    });
                }
                function btemplatesJqueryGetPosts(el, postsToDisplay, postsType, postsThumbnailSize, postsStyle, exclude) {
                    postsToDisplay = parseInt(postsToDisplay);
                    postsStyle = typeof postsStyle !== 'undefined' ? postsStyle : 'list';
                    exclude = typeof exclude !== 'undefined' ? exclude : false;
                    postsToDisplay = exclude ? postsToDisplay + 1 : postsToDisplay;
                    var tag = tagName = '';
                    regex = /tag\:(.*?)$/i;
                    if (regex.exec(postsType)) {
                        var tagName = postsType.match(regex);
                        postsType = tagName[1];
                        tag = '/-/' + encodeURI(tagName[1]);
                    }
                    $j.get( blogurl + '/feeds/posts/default' + tag, { 'alt': 'json', 'max-results': postsToDisplay }, function(data){
                        if( typeof data === 'undefined' ){
                            console.log(data);
                            return data;
                        }
                        var code = btemplatesProcessPosts(data, postsToDisplay, postsThumbnailSize, postsStyle, postsType, exclude);
                        el.html(code);
                        if( postsStyle === 'video' )
                            $j('.post-body iframe, .post-body embed, .post-body object').wrap('<div class="video-container"></div>');
                    })
                }
                function btemplatesJqueryNextPosts(el, newerPostUrl, olderPostUrl, postsThumbnailSize) {
                    postsThumbnailSize = parseInt(postsThumbnailSize);
                    var startIndex = 1;
                    var foundPosts = 0;
                    $j.get(blogurl + '/feeds/posts/summary/', { 'alt':'json', 'max-results':'500', 'start-index':startIndex }, function(data){
                        for (var i = 0; i < data.feed.entry.length; i++) {
                            post = data.feed.entry[i];
                            for (var j = 0; j < post.link.length; j++) {
                                if (post.link[j].rel === 'alternate') {
                                    if (post.link[j].href !== newerPostUrl && post.link[j].href !== olderPostUrl)
                                        delete data.feed.entry[i];
                                    else
                                        foundPosts++;
                                }
                            }
                        }
                        if (foundPosts > 0) {
                            var code = btemplatesProcessPosts(data, 500, postsThumbnailSize);
                            el.html(code);
                        }
                    })
                }
                function btemplatesProcessPosts(json, postsToDisplay, postsThumbnailSize, postsStyle, postsType, exclude) {
                    if (typeof json.feed.entry === 'undefined')
                        return 'No posts found';
                    postsToDisplay = parseInt(postsToDisplay);
                    var postSummaryLength = 160;
                    var postThumbnailWidth = parseInt(postsThumbnailSize);
                    var postHTML = '';
                    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    var olderPostDate = Date.now();
                    for (var i = 0; i < postsToDisplay; i++) {
                        var post = postTitle = postDateTime = postDate = postYear = postMonth = postMonthName = postDay =
                                postUrl = postLabelsList = postCommentsCount = postThumbnail = postContent = postTags =
                                postSummary = postsThumbnailSquare = postAuthor = postAuthorAvatar = postId = postLocation = '';
                        post = json.feed.entry[i];
                        if (post === undefined)
                            continue;
                        postId = post.id.$t;
                        if (exclude && postId.indexOf(exclude) !== -1)
                            continue;
                        postTitle = post.title.$t != null ? post.title.$t : '';
                        postCommentsCount = post.thr$total;
                        postDateTime = post.published.$t;
                        if( new Date(olderPostDate) > new Date(postDateTime) )
                            olderPostDate = postDateTime;
                        olderPostDate = olderPostDate === null ? '' : olderPostDate;
                        olderPostDate = olderPostDate.replace( /\.\d{3}/, '' );
                        postDate = postDateTime.substring(0, 10);
                        postYear = postDate.substring(0, 4);
                        postMonth = postDate.substring(5, 7);
                        postMonthName = months[parseInt(postMonth) - 1];
                        postDay = postDate.substring(8, 10);
                        postDateStr = postDay + ' ' + postMonthName + ' ' + postYear;
                        postAuthor = post.author[0].name.$t;
                        postAuthorAvatar = ( 'gd$image' in post.author[0] ) ? post.author[0].gd$image.src : 'https://3.bp.blogspot.com/-qnvargRhquo/XSJ9VCaxZ4I/AAAAAAAABNU/f5c-lN4M9dIl3Wr87zT_guszgZY9RDe6gCLcBGAs/s35/user.png';
                        postLocation = ( 'georss$featurename' in post ) ? post.georss$featurename.$t : '';
                        for (var j = 0; j < post.link.length; j++) {
                            if (post.link[j].rel === 'alternate') {
                                postUrl = post.link[j].href;
                                break;
                            }
                        }
                        if ('category' in post) {
                            for (var c = 0; c < post.category.length; c++) {
                                var comma = (c === post.category.length - 1) ? '' : ', ';
                                postTags += post.category[c].term + comma;
                            }
                        }
                        if ('content' in post) {
                            postContent = post.content.$t;
                            postSummary = postContent.replace(/<\/?[^>]+(>|$)/g, "").substring(0, postSummaryLength) + '...';
                        } else {
                            postContent = postSummary = post.summary.$t;
                        }
                        var imagesRegex = /https?:\/\/[^\s\#\?]*\.(jpe?g|gif|png)/ig;
                        var images = postContent.match(imagesRegex);
                        if( images !== null && images.length > 0 ){
                            postThumbnail = images[0].replace(/(https?:\/\/[^\s\#\?]*\/)(s\d+|w\d+-h\d+|w\d+)(\/[^\s\#\?\/]*\.)(jpe?g|png|gif)/i, function(match, g1, g2, g3, g4){return g1+'w'+postThumbnailWidth+g3+g4});
                            postThumbnailSquare = postThumbnail.replace('/w'+postThumbnailWidth+'/', '/s'+postThumbnailWidth+'-c/');
                        } else if(post.media$thumbnail) {
                            var rawThumbnail = post.media$thumbnail;
                            var youTubePreviewRegex = /img\.youtube\.com\/vi\/.*\/default\.jpg/i;
                            if(youTubePreviewRegex.test(rawThumbnail.url)){
                                postThumbnail = postThumbnailSquare = rawThumbnail.url.replace('default.jpg', 'maxresdefault.jpg');
                            } else {
                                postThumbnail = rawThumbnail.url.replace('s72-c', 'w' + postThumbnailWidth);
                                postThumbnailSquare = rawThumbnail.url.replace('s72-c', 's' + postThumbnailWidth + '-c');
                            }
                        } else {
                            postThumbnail = 'https://1.bp.blogspot.com/-OoP4sWGVriY/XPBuyFZuqyI/AAAAAAAABGI/F3CU_cugs1ozET0Wl6ijZrNcvwJzupbcgCLcBGAs/w' + postThumbnailWidth + '/post-image.png';
                            postThumbnailSquare = 'https://1.bp.blogspot.com/-OoP4sWGVriY/XPBuyFZuqyI/AAAAAAAABGI/F3CU_cugs1ozET0Wl6ijZrNcvwJzupbcgCLcBGAs/s' + postThumbnailWidth + '-c/post-image.png';
                        }
                        if (postsStyle === 'slider') {
                            var active = (i === 0) ? ' active ' : '';
                            postHTML += '<div class="btemplates-post carousel-item' + active + '">' +
                                    '<img class="d-block w-100" src="' + postThumbnail + '" alt="' + postTitle + '"/>' +
                                    '<div class="carousel-caption d-none d-md-block">' +
                                    '<div class="bt-post-title">' +
                                    '<a href="' + postUrl + '"><h5>' +
                                    postTitle +
                                    '</h5></a>' +
                                    '</div>' +
                                    '<div class="bt-post-content">' +
                                    '<p><a href="' + postUrl + '">' +
                                    postSummary +
                                    '</a></p>' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                        } else if (postsStyle === 'testimonial') {
                            var active = i === 0 ? ' active ' : '';
                            postLocation = postLocation !== '' ? '<div class="bt-post-location d-none d-sm-block"><i class="fa fa-map-marker" aria-hidden="true"></i> '+postLocation+'</div>' : '';
                            postHTML += '<div class="btemplates-post carousel-item' + active + '">' +
                                    '<img class="rounded-circle mb-2" src="' + postThumbnailSquare + '" alt="' + postTitle + '"/>' +
                                    '<div class="caption d-block">' +
                                    '<div class="bt-post-title">' +
                                    '<a href="' + postUrl + '"><h5>' +
                                    postTitle +
                                    '</h5></a>' +
                                    '</div>' +
                                    '<div class="bt-post-content">' +
                                    '<p>' +
                                    postSummary +
                                    '</p>' +
                                    '</div>' +
                                    postLocation +
                                    '</div>' +
                                    '</div>';
                        } else if (postsStyle === 'menulist') {
                            var menuThumbnails = postsThumbnailSize === 0 ? '' : '<img src="' + postThumbnail + '" width="100%" alt="' + postTitle + '"/><br />';
                            postHTML += '<a class="dropdown-item" href="' + postUrl + '">' + menuThumbnails + postTitle + '</a>';
                        } else if (postsStyle === 'mosaic') {
                            postHTML += '<div class="col-md-6 col-lg-3">' +
                                    '<div class="item">' +
                                    '<a href="' + postUrl + '">' +
                                    '<img src="' + postThumbnailSquare + '" width="' + postThumbnailWidth + 'px" alt="' + postTitle + '"/>' +
                                    '</a>' +
                                    '<div class="item-title">' +
                                    '<span>' + postTags + '</span>' +
                                    '<a href="' + postUrl + '">' +
                                    '<h3>' + postTitle + '</h3>' +
                                    '</a>' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                        } else if(postsStyle === 'course'){
                            postLocation = postLocation !== '' ? '<div class="bt-post-location"><i class="fa fa-map-marker" aria-hidden="true"></i> '+postLocation+'</div>' : '';
                            postHTML += '<div class="col-12 col-sm-6 col-lg-4 mb-4"><div class="btemplates-post h-100">' +
                                    '<div class="bt-post-thumbnail">' +
                                    '<a href="' + postUrl + '">' +
                                    '<img src="' + postThumbnail + '" width="' + postThumbnailWidth + 'px" alt="' + postTitle + '"/>' +
                                    '</a>' +
                                    '</div>' +
                                    '<div class="bt-post-author-avatar">' +
                                    '<img class="rounded-circle border" alt="By '+postAuthor+'" title="By '+postAuthor+'" width="50px" src="'+postAuthorAvatar+'"/>' +
                                    '</div>' +
                                    '<div class="bt-post-title">' +
                                    '<a href="' + postUrl + '">' +
                                    postTitle +
                                    '</a>' +
                                    '</div><hr class="subtitle-separator"/>' +
                                    '<div class="bt-post-content">' +
                                    postSummary +
                                    '</div>' +
                                    postLocation +
                                    '<div class="bt-post-date">' +
                                    postDate +
                                    '</div>' +
                                    '</div></div>';
                        } else if(postsStyle === 'bloglist'){
                            postHTML += '<div class="col-12 col-sm-6 col-lg-4 mb-4"><div class="btemplates-post h-100">' +
                                    '<div class="bt-post-thumbnail">' +
                                    '<a href="' + postUrl + '">' +
                                    '<img src="' + postThumbnail + '" width="' + postThumbnailWidth + 'px" alt="' + postTitle + '"/>' +
                                    '</a>' +
                                    '</div>' +
                                    '<div class="bt-post-title">' +
                                    '<a href="' + postUrl + '">' +
                                    postTitle +
                                    '</a>' +
                                    '</div>' +
                                    '<div class="bt-post-date">' +
                                    postDateStr +
                                    '</div>' +
                                    '<hr class="subtitle-separator"/>' +
                                    '<div class="bt-post-content">' +
                                    postSummary +
                                    '</div>' +
                                    '</div></div>';
                        } else if(postsStyle === 'simplelist'){
                            postHTML += '<li class="row">' +
                             '<div class="col-1"><i class="fa fa-file-o" aria-hidden="true"></i></div>' +
                              '<div class="col-10"><a href="'+postUrl+'">'+postTitle+'</a></div>' +
                               '<div class="col-1"><a class="btn btn-light" href="'+postUrl+'" role="button"><i class="fa fa-chevron-right" aria-hidden="true"></i></a></div>' +
                                '</li>';
                        } else if( postsStyle === 'video' ){
                            postHTML += '<div class="bt-post-title"><a href="'+postUrl+'"><h3>'+postTitle+'</h3></a></div>';
                            var youtubeRegex = /((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?/i
                            if( youtubeRegex.exec( postContent ) ) {
                                var youtubeUrlArray = postContent.match( youtubeRegex );
                                var youtubeUrl = 'https://www.youtube.com/embed/'+youtubeUrlArray[5];
                                postHTML += '<div class="video-container"><iframe src="'+youtubeUrl+'" frameborder="0" allowfullscreen></iframe></div>'
                                postHTML += '<div class="bt-post-content">' +
                                    '<a href="' + postUrl + '">' +
                                    postSummary +
                                    '</a>' +
                                    '</div>';
                            } else {
                                postHTML = '<div class="post-body">'+postContent+'</div>'
                            }
                        } else {
                            postHTML += '<div class="btemplates-post">' +
                                    '<div class="bt-post-thumbnail">' +
                                    '<a href="' + postUrl + '">' +
                                    '<img src="' + postThumbnail + '" width="' + postThumbnailWidth + 'px" alt="' + postTitle + '"/>' +
                                    '</a>' +
                                    '</div>' +
                                    '<div class="bt-post-title">' +
                                    '<a href="' + postUrl + '">' +
                                    postTitle +
                                    '</a>' +
                                    '</div>' +
                                    '<div class="bt-post-content">' +
                                    '<a href="' + postUrl + '">' +
                                    postSummary +
                                    '</a>' +
                                    '</div>' +
                                    '<div class="bt-post-date">' +
                                    postDate +
                                    '</div>' +
                                    '</div>';
                        }
                    }
                    nextPostsUrl = ( postsType !== 'latest' ) ?
                                    blogurl+'search/label/'+encodeURI(postsType)+'?updated-max='+olderPostDate+'&max-results='+postsToDisplay +'&start='+postsToDisplay+'&by-date=false':
                                    blogurl+'search?updated-max='+olderPostDate+'&max-results='+postsToDisplay+'&start='+postsToDisplay+'&by-date=false';
                    if (postsStyle === 'slider') {
                        var indicatorHTML = '';
                        for (var l = 0; l < postsToDisplay; l++) {
                            var active = l === 0 ? ' active ' : '';
                            indicatorHTML += '<li data-target="#btemplates-posts-slider" data-slide-to="' + l + '" class="' + active + '"></li>';
                        }
                        indicatorHTML = '<ol class="carousel-indicators">' + indicatorHTML + '</ol>';
                        postHTML = '<div id="btemplates-posts-slider" class="carousel slide" data-ride="carousel">' +
                                indicatorHTML +
                                '<div class="carousel-inner">' +
                                postHTML +
                                '</div>' +
                                '<a class="carousel-control-prev" href="#btemplates-posts-slider" role="button" data-slide="prev">' +
                                '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
                                '<span class="sr-only">Previous</span>' +
                                '</a>' +
                                '<a class="carousel-control-next" href="#btemplates-posts-slider" role="button" data-slide="next">' +
                                '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
                                '<span class="sr-only">Next</span>' +
                                '</a>' +
                                '</div>';
                    } else if (postsStyle === 'testimonial') {
                        var indicatorHTML = '';
                        for (var l = 0; l < postsToDisplay; l++) {
                            var active = l === 0 ? ' active ' : '';
                            indicatorHTML += '<li data-target="#btemplates-posts-slider" data-slide-to="' + l + '" class="' + active + '"></li>';
                        }
                        indicatorHTML = '<ol class="carousel-indicators">' + indicatorHTML + '</ol>';
                        postHTML = '<hr class="title-separator"/><div id="btemplates-posts-slider" class="carousel slide" data-ride="carousel">' +
                                //indicatorHTML +
                                '<div class="carousel-inner">' +
                                postHTML +
                                '</div>' +
                                '<a class="carousel-control-prev" href="#btemplates-posts-slider" role="button" data-slide="prev">' +
                                '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
                                '<span class="sr-only">Previous</span>' +
                                '</a>' +
                                '<a class="carousel-control-next" href="#btemplates-posts-slider" role="button" data-slide="next">' +
                                '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
                                '<span class="sr-only">Next</span>' +
                                '</a>' +
                                '</div>';
                    } else if (postsStyle === 'menulist') {
                        var menuId = postsType.toLowerCase().replace(/[^a-z0-9]/, '');
                        postHTML = '<a class="nav-link dropdown-toggle" href="#" id="' + menuId + '" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                                postsType +
                                '</a>' +
                                '<div class="dropdown-menu" aria-labelledby="' + menuId + '">' +
                                postHTML +
                                '</div>';
                    } else if (postsStyle === 'mosaic') {
                        postHTML = '<div class="btemplates-portfolio"><div class="row no-gutters">' + postHTML + '</div></div>';
                    } else if (postsStyle === 'course') {
                        postHTML = '<hr class="title-separator mb-4"/>' +
                         '<div class="btemplates-courses">' +
                          '<div class="row">' +
                         postHTML +
                         '</div>' +
                          '<div class="row justify-content-center">' +
                          '<div class="col-12 col-sm-6 col-lg-4">' +
                          '<a href="'+nextPostsUrl+'" class="btn btn-block btn-outline-info">' +
                           '<i class="fa fa-angle-double-right" aria-hidden="true"></i>' +
                            '</a>' +
                          '</div>' +
                          '</div>' +
                          '</div>';
                    } else if (postsStyle === 'bloglist') {
                        postHTML = '<hr class="title-separator mb-4"/>' +
                         '<div class="btemplates-blog">' +
                          '<div class="row">' +
                          postHTML +
                          '</div>' +
                          '<div class="row justify-content-center">' +
                          '<div class="col-12 col-sm-6 col-lg-4">' +
                          '<a href="'+nextPostsUrl+'" class="btn btn-block btn-outline-info">' +
                           '<i class="fa fa-angle-double-right" aria-hidden="true"></i>' +
                            '</a>' +
                          '</div>' +
                          '</div>' +
                           '</div>';
                    } else if (postsStyle === 'simplelist') {
                        postHTML = '<ul>'+postHTML+'</ul>';
                    } else if (postsStyle === 'video') {
                        postHTML = '<hr class="title-separator mb-4"/><div class="btemplates-videos">' + postHTML + '</div>';
                    } else {
console.log(postsStyle);
                    }
                    return postHTML;
                }
                function btemplatesJqueryGetComments(el, commentsToDisplay) {
                    commentsToDisplay = parseInt(commentsToDisplay);
                    $j.get( blogurl + '/feeds/comments/summary', { 'alt':'json', 'max-results':commentsToDisplay }, function(data) {
                        var code = btemplatesProcessComments(data, commentsToDisplay);
                        el.html(code);
                    });
                }
                function btemplatesProcessComments(json, commentsToDisplay) {
                    if (json.feed.entry === undefined)
                        return 'No comments found';
                    var commentHTML = '';
                    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    for (var i = 0; i < commentsToDisplay; i++) {
                        var comment = commentDateTime = commentDate = commentYear = commentMonth = commentMonthName =
                                commentDay = commentUrl = commentContent = commentSummary = commentAuthor =
                                        commentAuthorAvatar = postTitle = '';
                        comment = json.feed.entry[i];
                        if (comment === undefined)
                            continue;
                        commentDateTime = comment.published.$t;
                        commentDate = commentDateTime.substring(0, 10);
                        commentYear = commentDate.substring(0, 4);
                        commentMonth = commentDate.substring(5, 7);
                        commentMonthName = months[parseInt(commentMonth) - 1];
                        commentDay = commentDate.substring(8, 10);
                        commentAuthor = comment.author[0].name.$t;
                        for (var j = 0; j < comment.link.length; j++) {
                            if (comment.link[j].rel === 'alternate') {
                                commentUrl = comment.link[j].href;
                                break;
                            }
                        }
                        commentContent = commentSummary = comment.summary.$t;
                        commentAuthorAvatar = comment.author[0].gd$image.src;
                        if (commentAuthorAvatar.indexOf('blogblog.com/img/blank.gif') !== -1 ) {
                            commentAuthorAvatar = 'https://3.bp.blogspot.com/-qnvargRhquo/XSJ9VCaxZ4I/AAAAAAAABNU/f5c-lN4M9dIl3Wr87zT_guszgZY9RDe6gCLcBGAs/s100/user.png';
                        }
                        postTitle = comment.title.$t;
                        commentHTML += '<div class="btemplates-comment">' +
                                '<div class="bt-comment-avatar">' +
                                '<a href="' + commentUrl + '">' +
                                '<img class="profile-img rounded-circle border border-secondary" src="' + commentAuthorAvatar + '" alt="' + commentAuthor + '"/>' +
                                '</a>' +
                                '</div>' +
                                '<div class="bt-comment-author">' +
                                '<a href="' + commentUrl + '">' +
                                commentAuthor +
                                '</a>:' +
                                '<div class="bt-comment-content">' +
                                postTitle +
                                '</div>' +
                                '<div class="bt-comment-date">' +
                                '<a href="' + commentUrl + '">' +
                                commentDate +
                                '</a>' +
                                '</div>' +
                                '</div>';
                    }
                    return commentHTML;
                }
                linkListUl = $j('.navbar .section ul').each(function(){ $j(this).addClass('navbar-nav') });
                $j('.navbar .section li').each(function(i){
                    var navItemText = $j(this).children('a').text();
                    $j(this).addClass('nav-item align-self-lg-center');
                    $j(this).children('a').addClass('nav-link');
                    var re = /^-([^-]+)/i;
                    var resub = /^--([^-]+)/i;
                    var retag = /^(tag:[^-]+)-?(\d+)?-?(true|false)?/i;
                    if (re.exec(navItemText) && ajaxSupport) {
                        var previousNavItem = $j(this).prev();
                        if(previousNavItem.length){
                            var navItemLink = $j(this).children('a').attr('href');
                            var navItemNewText = navItemText.replace(/^-/i, '');
                            var nextNavItem = $j(this).next();
                            var nextNavItemText = nextNavItem.text();
                            var previousNavItemLink = previousNavItem.children('a').attr('href');
                            var previousNavItemText = previousNavItem.children('a').text();
                            var newLink = subitems = '';
                            while( resub.exec($j(this).next().text()) ) {
                                subitems += '<a class="dropdown-item" href="' + $j(this).next().children('a').attr('href') + '">' +
                                 '' + $j(this).next().text().replace('--', '') + '</a>';
                                $j(this).next().remove();
                            }
                            $j(this).remove();
                            if( resub.exec(nextNavItemText) ) {
                                newLink = '<div class="dropdown-submenu">' +
                                 '<a id="sub-dropdown-'+i+'" role="button" class="dropdown-item dropdown-toggle" ' +
                                  'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ' +
                                   'href="'+navItemLink+'">'+navItemNewText+'</a>' +
                                    '<div class="dropdown-menu" aria-labelledby="sub-dropdown-'+i+'">' +
                                     subitems +
                                     '</div>' +
                                      '</div>';
                            } else {
                                newLink = '<a class="dropdown-item" href="' + navItemLink + '">' + navItemNewText + '</a>';
                            }
                            if (previousNavItem.hasClass('dropdown')) {
                                var dropdownList = previousNavItem.find('.dropdown-menu').first();
                                dropdownList.append(newLink);
                            } else {
                                previousNavItem.className += ' ' + 'dropdown';
                                previousNavItem.addClass('dropdown');
                                previousNavItem.html('<a class="nav-link dropdown-toggle" href="' + previousNavItemLink +
                                        '" role="button" data-toggle="dropdown" id="dropdown-' + i + '" aria-haspopup="true" aria-expanded="false">' +
                                        previousNavItemText +
                                        '</a>' +
                                        '<div class="dropdown-menu" aria-labelledby="dropdown-' + i + '">' +
                                        newLink +
                                        '</div>');
                            }
                        }
                    } else if (retag.exec(navItemText) && ajaxSupport) {
                        var dropdownSettings = navItemText.match(retag);
                        var postsType = dropdownSettings[1];
                        var postsToDisplay = parseInt(dropdownSettings[2]);
                        var postsThumbnailSize = dropdownSettings[3] === 'true' ? 200 : 0;
                        $j(this).addClass('dropdown');
                        $j(this).children('a').html(postsType.replace(/tag:|-\d/, ''));
                        btemplatesJqueryGetPosts($j(this), postsToDisplay, postsType, postsThumbnailSize, 'menulist');
                    }
                });
                $j('#topMenu').removeClass('d-none');
                $j(function() {
                    $j("div.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $j(this).siblings().toggleClass("show");
                        if (!$j(this).next().hasClass('show')) {
                            $j(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
                        }
                        $j(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                            $j('.dropdown-submenu .show').removeClass("show");
                        });
                    });
                });
                $j('.navbar-simple .section').each(function(){
                    if($j(this).find('.widget-content').length)
                        $j(this).html($j(this).find('.widget-content').html());
                });
                $j('.navbar-simple .section li').each(function(){
                    var navItemText = $j(this).children('a').text();
                    $j(this).addClass('nav-item');
                    $j(this).children('a').addClass('nav-link');
                });
                $j('.navbar-simple .section ul').each(function(){
                    $j(this).addClass('nav');
                });
                $j('.btemplates-dropdown nav, .btemplates-dropdown .navbar-simple').each(function(){
                    $j(this).removeClass('d-none');
                });
                $j('.HTML .widget-content').each(function(i){
                    var re = /^\s?(\d+)-(.*?)-(\d+)p?x?-?(list|slider|menulist|mosaic|course|testimonial|bloglist|video)?-?(\d*)?\s?$/i;
                    var commentsre = /(\d+)-comments/i;
                    if (re.exec($j(this).html()) && ajaxSupport) {
                        var postsSettings = $j(this).html().match(re);
                        var postsToDisplay = postsSettings[1];
                        var postsType = postsSettings[2];
                        var postsThumbnailSize = postsSettings[3];
                        var postsStyle = postsSettings[4] ? postsSettings[4] : 'list';
                        var postsExclude = postsSettings[5] ? postsSettings[5] : false;
                        $j(this).html('<img src="https://4.bp.blogspot.com/-VWY5-YJq0v4/XO4Y_HXklkI/AAAAAAAABE0/8G7P03z0YrgxKQx3cMrdagfB9K5GjkJ6ACLcBGAs/s1600/ajax-loader.gif" />');
                        btemplatesJqueryGetPosts($j(this), postsToDisplay, postsType, postsThumbnailSize, postsStyle, postsExclude);
                    } else if (commentsre.exec($j(this).html()) && ajaxSupport) {
                        var commentsSettings = $j(this).html().split('-');
                        var commentsToDisplay = parseInt(commentsSettings[0]);
                        $j(this).html('<img src="https://4.bp.blogspot.com/-VWY5-YJq0v4/XO4Y_HXklkI/AAAAAAAABE0/8G7P03z0YrgxKQx3cMrdagfB9K5GjkJ6ACLcBGAs/s1600/ajax-loader.gif" />');
                        btemplatesJqueryGetComments($j(this), commentsToDisplay);
                    }
                });
                $j('.post .post-body').each( function(i){
                    var re = /\[posts--(tag\:.*?)--(\d+)\]/i
                    if (re.exec($j(this).html()) && ajaxSupport) {
                        var postsSettings = $j(this).html().match(re);
                        var postsShortcode = postsSettings[0];
                        var postsTag = postsSettings[1];
                        var postsToDisplay = postsSettings[2];
                        var loading = '<div id="posts-list-tag" class="posts-list-tag"><img src="https://4.bp.blogspot.com/-VWY5-YJq0v4/XO4Y_HXklkI/AAAAAAAABE0/8G7P03z0YrgxKQx3cMrdagfB9K5GjkJ6ACLcBGAs/s1600/ajax-loader.gif" /></div>';
                        $j(this).html( $j(this).html().replace( postsShortcode, loading ) );
                        var postsContainerId = $j('#posts-list-tag');
                        btemplatesJqueryGetPosts( postsContainerId, postsToDisplay, postsTag, 0, 'simplelist' );
                    }
                });
                var newerPost = $j(".blog-pager-newer-link");
                var olderPost = $j(".blog-pager-older-link");
                if (newerPost.length || olderPost.length) {
                    newerPost = newerPost.length ? newerPost.attr('href') : '';
                    olderPost = olderPost.length ? olderPost.attr('href') : '';
                    btemplatesJqueryNextPosts($j('#blog-pager'), newerPost, olderPost, 400);
                }
                $j('body').on('click', '.btemplates-portfolio .item', function () {
                    window.location = $j(this).find('a').attr('href');
                });
                $j('#btemplates-search-icon').on('shown.bs.modal', function () {
                    $j('#btemplates-search .BlogSearch input[type="text"]').trigger('focus');
                });
                var btDate = new Date();
                $j('#this-year').text(btDate.getFullYear());
                $j(window).scroll(function () {
                    $j(this).scrollTop() > 400 ? $j("#back-top").fadeIn() : $j("#back-top").fadeOut()
                });
                $j("#back-top").click(function () {
                    return $j("body,html").animate({scrollTop: 0}, 800), !1
                });
                $j('#bt-subscription .FollowByEmail h2').after('<hr class="title-separator"/>');
                if (blogurl.indexOf('lms-education.blogspot') !== -1) {
                    if (ProfileImage.length > 0) {
                        ProfileImage.attr('src', 'https://3.bp.blogspot.com/-y1tY0AKmVy4/XOWHwnd2ZyI/AAAAAAAABEE/Etx1Wky9KOEfaj2Fxy7cVUnS7Q45WlGMACPcBGAYYCw/s125-c/guapa.jpg')
                    }
                    var profileLink = $j('.Profile a.profile-link');
                    if (profileLink.length > 0) {
                        profileLink.attr('href', 'https://btemplates.com');
                    }
                    var authorImage = $j('#btemplates-author-box img.rounded-circle');
                    if (authorImage.length > 0) {
                        authorImage.attr('src', 'https://3.bp.blogspot.com/-y1tY0AKmVy4/XOWHwnd2ZyI/AAAAAAAABEE/Etx1Wky9KOEfaj2Fxy7cVUnS7Q45WlGMACPcBGAYYCw/s150-c/guapa.jpg');
                    }
                    $j('.FollowByEmail form').each(function () {
                        $j(this).attr('onsubmit', 'window.open("https://feedburner.google.com/fb/a/mailverify?uri=btemplates", "popupwindow", "scrollbars=yes,width=550,height=520"); return true');
                    });
                    $j('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intro.js/2.9.3/introjs.min.css" type="text/css" />');
                    $j.getScript('https://cdnjs.cloudflare.com/ajax/libs/intro.js/2.9.3/intro.min.js', function () {
                        var intro = introJs();
                        if (!RegExp('multipage|error404', 'gi').test(window.location.search)) {
                            intro.oncomplete(function () {
                                window.location.href = blogurl+'2019/07/open-source-best-tools.html?multipage';
                            });
                            intro.setOptions({
                                steps: [
                                    {
                                        element: '#btemplates-dropdown-2 nav',
                                        intro: "You can edit or delete any menu without coding. <a href='https://btemplates.com/blog/lms-education-template/' target='_blank'>Read more.</a>"
                                    },
                                    {
                                        element: '#SocialNetworks',
                                        intro: 'This is a <i>Links List</i> gadget. Your links will be automatically converted into icons.'
                                    },
                                    {
                                        element: '#MainMenu',
                                        intro: 'This menu supports drop down items and is totally responsive. <a href="https://btemplates.com/blog/lms-education-template/" target="_blank">Read more »</a>'
                                    },
                                    {
                                        element: '#header-wrapper',
                                        intro: 'The background image, logo and description can be easily changed from your template layout panel. <a href="https://btemplates.com/blog/lms-education-template/" target="_blank">Read more »</a>'
                                    },
                                    {
                                        element: '#LinkList63',
                                        intro: 'This dynamic menu is also very easy to edit without coding. <a href="https://btemplates.com/blog/lms-education-template/" target="_blank">Read more »</a>'
                                    },
                                    {
                                        element: '#HTML49',
                                        intro: 'This is a list of posts by Labels, in this demo, to show the latest courses.'
                                    },
                                    {
                                        element: '#Label3',
                                        intro: 'We invented an unique way to display all the Labels in your blog. <a href="https://btemplates.com/blog/lms-education-template/" target="_blank">Read more »</a>'
                                    },
                                    {
                                        element: '#HTML59',
                                        intro: 'This is ready-to-use list of posts to display Testimonials or Profiles.'
                                    },
                                    {
                                        element: '#emailSubscription',
                                        intro: 'Subscription to your site is going to be easy with this proffesional looking form.'
                                    },
                                    {
                                        element: '#HTML79',
                                        intro: 'Do you need to display more content? You can add a gallery of your latest blog posts or by label right here.'
                                    },
                                    {
                                        element: '#latestVideo',
                                        intro: 'Make a small presentation about your site or display your latest video here.'
                                    },
                                    {
                                        element: '#contactForm',
                                        intro: 'Improve the communication with clients and visitors with a clear contact form.'
                                    },
                                    {
                                        element: '#portfolio-footer',
                                        intro: 'This a place to showcast your pictures just editing a one-line <i>HTML</i> gadget. <a href="https://btemplates.com/blog/lms-education-template/" target="_blank">Read more »</a>'
                                    },
                                    {
                                        element: '#HTML63',
                                        intro: 'Adding the latest comments in your blog never was so easy. <a href="https://btemplates.com/blog/lms-education-template/" target="_blank">Read more »</a>'
                                    }
                                ],
                                'doneLabel': 'Next page'
                            });
                            if (RegExp('tour', 'gi').test(window.location.search)) {
                                intro.start();
                            }
                        } else if (RegExp('error404', 'gi').test(window.location.search)) {
                            intro.oncomplete(function () {
                                window.location.href = blogurl;
                            });
                            intro.setOptions({
                                steps: [
                                    {
                                        element: '#btemplates-404',
                                        intro: 'Custom "404 Page not found" error page.'
                                    },
                                    {
                                        element: '.header-inner',
                                        intro: 'Thank you for taking this tour. I hope you find the perfect template for you blog!'
                                    }
                                ],
                                'doneLabel': 'End Tour.'
                            });
                            intro.start();
                        } else {
                            intro.oncomplete(function () {
                                window.location.href = blogurl+'bt?error404';
                            });
                            intro.setOptions({
                                steps: [
                                    {
                                        element: '.video-container',
                                        intro: 'All videos are full width and fully responsive.'
                                    },
                                    {
                                        element: '.posts-list-tag',
                                        intro: 'Display the content in any Label with a simple line a text. Eg. A course content.'
                                    },
                                    {
                                        element: '#btemplates-author-box',
                                        intro: 'Your author info is going to look sexy.'
                                    },
                                    {
                                        element: '#related-post',
                                        intro: 'List of related posts based on your post\'s labels.'
                                    },
                                    {
                                        element: '.comments-content',
                                        intro: 'Threaded comments ready.'
                                    },
                                    {
                                        element: '#blog-pager',
                                        intro: 'Next and previous posts with thumbnail!'
                                    }
                                ],
                                'doneLabel': 'Next page'
                            });
                            intro.start();
                        }
                        $j('a[href="#bt_tour"]').on('click', function () {
                            if (window.location.href != blogurl) {
                                window.location.href = blogurl+'?tour';
                                return;
                            }
                            intro.start();
                            return false;
                        });
                    });
                }
            });
            //]]>
        </script>
