library(tidyverse)
library(car) 
library(bestNormalize) 
library(effsize) 
library(ggplot2)

# Use setwd here to make sure the paths are correct.

### PARSE DATA ###
# Paths for data for each metric
get_path <- function(metric){
  list.files(path="./data", 
             recursive=TRUE,
             pattern=paste("^",metric,".*\\.csv", sep=""),
             full.names=TRUE)
}

csv_paths_joules <- get_path("Joule")
csv_paths_fcp <- get_path("fcp")
csv_paths_fp <- get_path("fp")
csv_paths_lcp <- get_path("lcp")
csv_paths_lt <- get_path("loadTime")

# Collects metrics into one dataframe
get_data <- function(path){
  path %>%
    lapply(read_csv, show_col_types = FALSE) %>% 
    bind_rows
}

joules_data <- get_data(csv_paths_joules)
fcp_data <- get_data(csv_paths_fcp)
fp_data <- get_data(csv_paths_fp)
lcp_data <- get_data(csv_paths_lcp)
lt_data <- get_data(csv_paths_lt)

# Make column for webapp, preloading treatment and browser
get_column <- function(paths, symbol, pos){
  paths %>% 
    strsplit(symbol, fixed=TRUE) %>%
    rapply(nth, n=pos) %>%
    factor
}

joules_data['webapp'] <- get_column(csv_paths_joules, '-', 8)
joules_data['preload'] <- get_column(csv_paths_joules, '-', 10)
joules_data['browser'] <- get_column(csv_paths_joules, '/', 5)

fcp_data['webapp'] <- get_column(csv_paths_fcp,'-', 8)
fcp_data['preload'] <- get_column(csv_paths_fcp,'-', 10)
fcp_data['browser'] <- get_column(csv_paths_fcp,'/', 5)

fp_data['webapp'] <- get_column(csv_paths_fp, '-', 8)
fp_data['preload'] <- get_column(csv_paths_fp, '-', 10)
fp_data['browser'] <- get_column(csv_paths_fp, '/', 5)

lcp_data['webapp'] <- get_column(csv_paths_lcp, '-', 8)
lcp_data['preload'] <- get_column(csv_paths_lcp, '-', 10)
lcp_data['browser'] <- get_column(csv_paths_lcp, '/', 5)

lt_data['webapp'] <- get_column(csv_paths_lt, '-', 8)
lt_data['preload'] <- get_column(csv_paths_lt, '-', 10)
lt_data['browser'] <- get_column(csv_paths_lt, '/', 5)

# Check correct parsing
joules_data$webapp %>% levels()
joules_data$preload %>% levels()
joules_data$browser %>% levels()

fcp_data$webapp %>% levels()
fcp_data$preload %>% levels()
fcp_data$browser %>% levels()

fp_data$webapp %>% levels()
fp_data$preload %>% levels()
fp_data$browser %>% levels()

lcp_data$webapp %>% levels()
lcp_data$preload %>% levels()
lcp_data$browser %>% levels()

lt_data$webapp %>% levels()
lt_data$preload %>% levels()
lt_data$browser %>% levels()

### DESCRIPTIVE STATISTICS ###
summaries <- function(dataframe, metric){
  print(sprintf("Overall summary for %s:", metric))
  print(summary(dataframe))
  
  chr_pr <- dataframe[which(dataframe$browser == 'chrome' & dataframe$preload == 'preload'),]
  chr_np <- dataframe[which(dataframe$browser == 'chrome' & dataframe$preload == 'no'),]
  op_pr <- dataframe[which(dataframe$browser == 'opera' & dataframe$preload == 'preload'),]
  op_np <- dataframe[which(dataframe$browser == 'opera' & dataframe$preload == 'no'),]
  
  print(sprintf("sd: %s", sd(dataframe[[metric]])))
  
  print(sprintf("%s, Chrome and preload", metric))
  print(summary(chr_pr[[metric]]))
  print(sprintf("sd: %s", sd(chr_pr[[metric]])))
  
  print(sprintf("%s, Chrome and no preload", metric))
  print(summary(chr_np[[metric]]))
  print(sprintf("sd: %s",sd(chr_np[[metric]])))
  
  print(sprintf("%s, Opera and preload", metric))
  print(summary(op_pr[[metric]]))
  print(sprintf("sd: %s",sd(op_pr[[metric]])))
  
  print(sprintf("%s, Opera and no preload", metric))
  print(summary(op_np[[metric]]))
  print(sprintf("sd: %s",sd(op_np[[metric]])))
}

summaries(joules_data, "Joule_calculated")
summaries(fcp_data, "fcp")
summaries(fp_data, "fp")
summaries(lcp_data, "lcp")
summaries(lt_data, "loadTime")

split_browser <- function(dataframe, brwsr){
  dataframe %>% filter(browser == brwsr) %>% 
    select(-c('browser')) 
}

joules_chrome <- split_browser(joules_data, 'chrome')
joules_opera <- split_browser(joules_data, 'opera')
fcp_chrome <- split_browser(fcp_data,'chrome')
fcp_opera <- split_browser(fcp_data, 'opera')
fp_chrome <- split_browser(fp_data, 'chrome')
fp_opera <- split_browser(fp_data, 'opera')
# lcp_chrome <- split_browser(lcp_data,'chrome')
# lcp_opera <- split_browser(lcp_data, 'opera')
lt_chrome <- split_browser(lt_data,'chrome')
lt_opera <- split_browser(lt_data, 'opera')

### OUTLIER DETECTION ###

remove_outliers <- function(dataframe, column) {
  lower <- quantile(dataframe[[column]], 0.05)
  upper <- quantile(dataframe[[column]], 0.95)
  dataframe[dataframe[[column]] > lower & dataframe[[column]] < upper,]
}

joules_chrome <- remove_outliers(joules_chrome, "Joule_calculated") 
joules_opera <- remove_outliers(joules_opera, "Joule_calculated") 
fcp_chrome <- remove_outliers(fcp_chrome, "fcp") 
fcp_opera <- remove_outliers(fcp_opera, "fcp") 
fp_chrome <- remove_outliers(fp_chrome, "fp") 
fp_opera <- remove_outliers(fp_opera, "fp") 
# lcp_chrome <- remove_outliers(lcp_chrome, "lcp") 
# lcp_opera <- remove_outliers(lcp_opera, "lcp") 
lt_chrome <- remove_outliers(lt_chrome, "loadTime") 
lt_opera <- remove_outliers(lt_opera, "loadTime")

joules_chrome$webapp_index <- as.factor(as.numeric(joules_chrome$webapp))
joules_opera$webapp_index <- as.factor(as.numeric(joules_opera$webapp))
fcp_chrome$webapp_index <- as.factor(as.numeric(fcp_chrome$webapp))
fcp_opera$webapp_index <- as.factor(as.numeric(fcp_opera$webapp))
fp_chrome$webapp_index <- as.factor(as.numeric(fp_chrome$webapp))
fp_opera$webapp_index <- as.factor(as.numeric(fp_opera$webapp))
# lcp_chrome$webapp_index <- as.factor(as.numeric(lcp_chrome$webapp))
# lcp_opera$webapp_index <- as.factor(as.numeric(lcp_opera$webapp))
lt_chrome$webapp_index <- as.factor(as.numeric(lt_chrome$webapp))
lt_opera$webapp_index <- as.factor(as.numeric(lt_opera$webapp))

### DISTRIBUTION ###

# Box plots
jc <- ggplot(joules_chrome, aes(x=webapp_index, y=Joule_calculated, fill=preload)) + 
  geom_boxplot() +
  xlab("Web app") +
  ylab("Energy consumed (Joules)") +
  # ggtitle("Energy consumption per webapp hosted in Chrome, with and without preloading") + 
  scale_fill_discrete(name = "Preloading", labels = c("Absent", "Present")) +
  theme(plot.title = element_text(size=13, hjust = 0.5, face = "bold"),
        panel.grid.major = element_blank(), 
        panel.grid.minor = element_blank(),
        panel.background = element_blank(),
        legend.position="bottom")

jc

ggsave("boxplot_joules_chrome.pdf", width=3000, height=1000, unit="px")

jo <- ggplot(joules_opera, aes(x=webapp_index, y=Joule_calculated, fill=preload)) + 
  geom_boxplot() +
  xlab("Web app") +
  ylab("Energy consumed (Joules)") +
  # ggtitle("Energy consumption per webapp hosted in Opera, with and without preloading") + 
  scale_fill_discrete(name = "Preloading", labels = c("Absent", "Present")) +
  theme(plot.title = element_text(size=13, hjust = 0.5, face = "bold"),
        panel.grid.major = element_blank(), 
        panel.grid.minor = element_blank(),
        panel.background = element_blank(),
        legend.position="bottom")

jo

ggsave("boxplot_joules_opera.pdf", width=3000, height=1000, unit="px")

tc <- ggplot(lt_chrome, aes(x=webapp_index, y=loadTime, fill=preload)) + 
  geom_boxplot() +
  xlab("Web app") +
  ylab("Page load time (ms)") +
  # ggtitle("Page load time per webapp hosted in Chrome, with and without preloading") + 
  scale_fill_discrete(name = "Preloading", labels = c("Absent", "Present")) +
  theme(plot.title = element_text(size=13, hjust = 0.5, face = "bold"),
        panel.grid.major = element_blank(), 
        panel.grid.minor = element_blank(),
        panel.background = element_blank(),
        legend.position="bottom")

tc

ggsave("boxplot_lt_chrome.pdf", width=3000, height=1000, unit="px")

to <- ggplot(lt_opera, aes(x=webapp_index, y=loadTime, fill=preload)) + 
  geom_boxplot() +
  xlab("Web app") +
  ylab("Page load time (ms)") +
  # ggtitle("Page load time per webapp hosted in Opera, with and without preloading") + 
  scale_fill_discrete(name = "Preloading", labels = c("Absent", "Present")) +
  theme(plot.title = element_text(size=13, hjust = 0.5, face = "bold"),
        panel.grid.major = element_blank(), 
        panel.grid.minor = element_blank(),
        panel.background = element_blank(),
        legend.position="bottom")

to

ggsave("boxplot_lt_opera.pdf", width=3000, height=1000, unit="px")

### NORMALITY CHECKING ###
plot_density <- function(data, metric, xax, yax, title){
  pdf(paste0(title, ".pdf"))
  plot(density(data[which(data$preload == 'preload'), ][[metric]]),
       xlab=xax,
       ylim=c(0,yax),
       col="blue",
       main=" ",
       cex.main=1.5,
       cex.lab=1.5,
       cex.axis=1.5)
  lines(density(data[which(data$preload == 'no'), ][[metric]]), col="red")
  legend("topright",
         c("With preload", "Without preload"),
         fill=c("red","blue"),
         cex=1.5
  )
  dev.off()
}

check_normality <- function(data, title) {
  pdf(paste0(title, ".pdf")) 
  car::qqPlot(data)
              # main=paste("Normal Q-Q Plot for", title, sep=" ")
  print(paste("Shapiro test for ", title, sep= " "))
  print(shapiro.test(data)) # when shapiro is LESS than 0.05, CANNOT ASSUME NORMAL DISTRIBUTION
  dev.off()
}

jc_dens <- plot_density(joules_chrome, "Joule_calculated", "Joules", 0.009, "Density of energy consumption, Chrome")
jo_dens <- plot_density(joules_opera, "Joule_calculated", "Joules", 0.009, "Density of energy consumption, Opera")

check_normality(joules_chrome[which(joules_chrome$preload=='preload'), ]$Joule_calculated, "Chrome energy consumption, with preloading")
check_normality(joules_chrome[which(joules_chrome$preload=='no'), ]$Joule_calculated, "Chrome energy consumption, without preloading")
check_normality(joules_opera[which(joules_opera$preload=='preload'), ]$Joule_calculated, "Opera energy consumption, with preloading")
check_normality(joules_opera[which(joules_opera$preload=='no'), ]$Joule_calculated, "Opera energy consumption, without preloading")

fcp_dens <- plot_density(fcp_chrome, "fcp", "First contentful paint (ms)", 0.0004, "Density of first contentful paint, Chrome")
fcp_dens <- plot_density(fcp_opera, "fcp", "First contentful paint (ms)", 0.0005, "Density of first contentful paint, Opera")

check_normality(fcp_chrome[which(fcp_chrome$preload=='preload'), ]$fcp, "Chrome first contentful paint, with preload")
check_normality(fcp_chrome[which(fcp_chrome$preload=='no'), ]$fcp, "Chrome first contentful paint, without preload")
check_normality(fcp_opera[which(fcp_opera$preload=='preload'), ]$fcp, "Opera first contentful paint, with preload")
check_normality(fcp_opera[which(fcp_opera$preload=='no'), ]$fcp, "Opera first contentful paint, without preload")

fp_dens <- plot_density(fp_chrome, "fp", "First paint (ms)", 0.0004, "Density of first paint, Chrome")
fp_dens <- plot_density(fp_opera, "fp", "First paint (ms)", 0.0005, "Density of first paint, Opera")

check_normality(fp_chrome[which(fp_chrome$preload=='preload'), ]$fp, "Chrome first paint, with preload")
check_normality(fp_chrome[which(fp_chrome$preload=='no'), ]$fp, "Chrome first paint, without preload")
check_normality(fp_opera[which(fp_opera$preload=='preload'), ]$fp, "Opera first paint, with preload")
check_normality(fp_opera[which(fp_opera$preload=='no'), ]$fp, "Opera first paint, without preload")

# lcp_dens <- plot_density(lcp_chrome, "lcp", "Largest contentful paint (ms)", 1, "Density of largest contentful paint, Chrome")
# lcp_dens <- plot_density(lcp_opera, "lcp", "Largest contentful paint (ms)", 1, "Density of largest contentful paint, Opera")
# 
# check_normality(lcp_chrome[which(lcp_chrome$preload=='preload'), ]$lcp, "Chrome largest contentful paint, with preload")
# check_normality(lcp_chrome[which(lcp_chrome$preload=='no'), ]$lcp, "Chrome largest contentful paint, without preload")
# check_normality(lcp_opera[which(lcp_opera$preload=='preload'), ]$lcp, "Opera largest contentful paint, with preload")
# check_normality(lcp_opera[which(lcp_opera$preload=='no'), ]$lcp, "Opera largest contentful paint, without preload")

lt_dens <- plot_density(lt_chrome, "loadTime", "Page load time (ms)", 0.0002, "Density of page load time, Chrome")
lt_dens <- plot_density(lt_opera, "loadTime", "Page load time (ms)", 0.0002, "Density of page load time, Opera")

check_normality(lt_chrome[which(lt_chrome$preload=='preload'), ]$loadTime, "Chrome page load time, with preload")
check_normality(lt_chrome[which(lt_chrome$preload=='no'), ]$loadTime, "Chrome page load time, without preload")
check_normality(lt_opera[which(lt_opera$preload=='preload'), ]$loadTime, "Opera page load time, with preload")
check_normality(lt_opera[which(lt_opera$preload=='no'), ]$loadTime, "Opera page load time, without preload")

### HYPOTHESIS TESTING ###

# Wilcoxon test; when value is MORE than 0.05, CANNOT REJECT H0
wilcox.test(joules_chrome[which(joules_chrome$preload=='preload'), ]$Joule_calculated, joules_chrome[which(joules_chrome$preload=='no'), ]$Joule_calculated)
wilcox.test(joules_opera[which(joules_opera$preload=='preload'), ]$Joule_calculated, joules_opera[which(joules_opera$preload=='no'), ]$Joule_calculated)
wilcox.test(fcp_chrome[which(fcp_chrome$preload=='preload'), ]$fcp, fcp_chrome[which(fcp_chrome$preload=='no'), ]$fcp)
wilcox.test(fcp_opera[which(fcp_opera$preload=='preload'), ]$fcp, fcp_opera[which(fcp_opera$preload=='no'), ]$fcp)
wilcox.test(fp_chrome[which(fp_chrome$preload=='preload'), ]$fp, fp_chrome[which(fp_chrome$preload=='no'), ]$fp)
wilcox.test(fp_opera[which(fp_opera$preload=='preload'), ]$fp, fp_opera[which(fp_opera$preload=='no'), ]$fp)
# wilcox.test(lcp_chrome[which(lcp_chrome$preload=='preload'), ]$lcp, lcp_chrome[which(lcp_chrome$preload=='no'), ]$lcp)
# wilcox.test(lcp_opera[which(lcp_opera$preload=='preload'), ]$lcp, lcp_opera[which(lcp_opera$preload=='no'), ]$lcp)
wilcox.test(lt_chrome[which(lt_chrome$preload=='preload'), ]$loadTime, lt_chrome[which(lt_chrome$preload=='no'), ]$loadTime)
wilcox.test(lt_opera[which(lt_opera$preload=='preload'), ]$loadTime, lt_opera[which(lt_opera$preload=='no'), ]$loadTime)

# Cliff's delta
cliff.delta(joules_chrome[which(joules_chrome$preload=='preload'), ]$Joule_calculated, joules_chrome[which(joules_chrome$preload=='no'), ]$Joule_calculated)
cliff.delta(joules_opera[which(joules_opera$preload=='preload'), ]$Joule_calculated, joules_opera[which(joules_opera$preload=='no'), ]$Joule_calculated)
cliff.delta(fcp_chrome[which(fcp_chrome$preload=='preload'), ]$fcp, fcp_chrome[which(fcp_chrome$preload=='no'), ]$fcp)
cliff.delta(fcp_opera[which(fcp_opera$preload=='preload'), ]$fcp, fcp_opera[which(fcp_opera$preload=='no'), ]$fcp)
cliff.delta(fp_chrome[which(fp_chrome$preload=='preload'), ]$fp, fp_chrome[which(fp_chrome$preload=='no'), ]$fp)
cliff.delta(fp_opera[which(fp_opera$preload=='preload'), ]$fp, fp_opera[which(fp_opera$preload=='no'), ]$fp)
# cliff.delta(lcp_chrome[which(lcp_chrome$preload=='preload'), ]$lcp, lcp_chrome[which(lcp_chrome$preload=='no'), ]$lcp)
# cliff.delta(lcp_opera[which(lcp_opera$preload=='preload'), ]$lcp, lcp_opera[which(lcp_opera$preload=='no'), ]$lcp)
cliff.delta(lt_chrome[which(lt_chrome$preload=='preload'), ]$loadTime, lt_chrome[which(lt_chrome$preload=='no'), ]$loadTime)
cliff.delta(lt_opera[which(lt_opera$preload=='preload'), ]$loadTime, lt_opera[which(lt_opera$preload=='no'), ]$loadTime)

